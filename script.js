let todoBtn = document.querySelector(".add"),
    todoDock = document.querySelector(".todo"),
    todoInput = document.querySelector(".message"),


    todoList = [];
    deletedTodo = []


if (localStorage.getItem("todo")) {
    todoList = JSON.parse(localStorage.getItem("todo"))
    addTodo();
}



const nowDate = () => {
    let date = new Date();
    let nowMonth = new Date().getMonth() + 1;
    switch (nowMonth) {

        case 1:
            nowMonth = "Января";
            break;
        case 2:
            nowMonth = "Февраля";
            break;
        case 3:
            nowMonth = "Марта";
            break;
        case 4:
            nowMonth = "Апреля";
            break;
        case 5:
            nowMonth = "Мая";
            break;
        case 6:
            nowMonth = "Июня";
            break;
        case 7:
            nowMonth = "Июля";
            break;
        case 8:
            nowMonth = "Августа";
            break;
        case 9:
            nowMonth = "Сентября";
            break;
        case 10:
            nowMonth = "Октября";
            break;
        case 11:
            nowMonth = "Ноября";
            break;
        case 12:
            nowMonth = "Декабря";
            break;

    }
    return `${date.getDate()} ` + nowMonth
}


todoBtn.addEventListener("click", () => {

    let todo = {
        text: todoInput.value,
        checked: false,
        favorite: false,
        close: `<div class="close">X</div>`,
        date: nowDate()

    }

    todoList.push(todo);
    addTodo();
    localStorage.setItem("todo", JSON.stringify(todoList));
    todoInput.value = "";
})

function addTodo() {
    let massege = ""
    todoList.forEach((el, i) => {
        massege += `
        <li>
            <div>
                <div class="date" >${el.date}</div>
                <input type="checkbox" id="item-${i}" ${el.checked ? "checked" : ""}>
                <label for="item-${i}">
                    <span>${el.text}</span>
                </label>
            </div>
            ${el.close}
        </li>`
    })
    todoDock.innerHTML = massege;
}

let close = document.querySelectorAll(".close");


todoDock.addEventListener("change", (e) => {
    let inputId = e.target.id
    let labelText = document.querySelector(`[for="${inputId}"] span`).innerHTML;
    todoList.forEach((el, i) => {
        if (el.text === labelText) {
            el.checked = !el.checked;
            localStorage.setItem("todo", JSON.stringify(todoList));
        }
    })

})

todoDock.addEventListener("click", (e) => {

    if (e.target.classList.contains("close")) {
        let li = e.target.closest("li");
        let labelText = li.querySelector("span").innerHTML
        console.log(labelText);

        todoList.forEach((el, i) => {
            if (el.text === labelText) {
                todoList.splice(i, 1);
                addTodo()
                localStorage.setItem("todo", JSON.stringify(todoList));
            }
        })
    }



})



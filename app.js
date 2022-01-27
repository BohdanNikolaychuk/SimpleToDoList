// Selector
let todoInput = document.getElementById('input');
let todoList = document.getElementById('todo-list')
let todoButton = document.getElementById('btn');

//Event Listeners
window.addEventListener('DOMContentLoaded', () => {
    addSaveLocalStorage();
});
todoButton.addEventListener('click', addToDo);
todoList.addEventListener('click', deleteCheck);

// Function
function addToDo(e) {
    e.preventDefault();
    if (todoInput.value !== '') {
        //created div and li
        const todoDiv = document.createElement('div');
        todoDiv.classList.add("toDo");

        const newTodo = document.createElement('li');


        newTodo.innerHTML = todoInput.value;

        newTodo.classList.add("toDo__li");
        todoDiv.appendChild(newTodo);

        //add localStorage
        saveLocalTodo(todoInput.value);

        //Check and trash button

        const completedButton = document.createElement('button');
        completedButton.innerHTML = `<i class ='fas fa-check'></i>`
        completedButton.classList.add('completed-button');
        todoDiv.appendChild(completedButton);

        const trashButton = document.createElement('button');
        trashButton.innerHTML = `<i class ='fas fa-trash'></i>`
        trashButton.classList.add('trash-button');
        todoDiv.appendChild(trashButton);
        // add check and trash btn in toto-list
        todoList.appendChild(todoDiv);
    }
    todoInput.value = '';

}


function deleteCheck(e) {
    const item = e.target;
    if (item.classList[0] === 'trash-button') {
        const todo = item.parentElement;
        removeLocalTodo(todo);
        todo.remove();
    } else if (item.classList[0] === 'completed-button') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function saveLocalTodo(todo) {
    let todoArray;
    if (localStorage.getItem("todoArray") === null) {
        todoArray = [];
    } else {
        todoArray = JSON.parse(localStorage.getItem("todoArray"));
    }
    todoArray.push(todo);
    localStorage.setItem("todoArray", JSON.stringify(todoArray));
}


function addSaveLocalStorage() {
    let todoArray;
    if (localStorage.getItem("todoArray") === null) {
        todoArray = [];
    } else {
        todoArray = JSON.parse(localStorage.getItem("todoArray"));
    }
    todoArray.forEach(function (todo) {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add("toDo");

        const newTodo = document.createElement('li');
        newTodo.innerHTML = todo;

        newTodo.classList.add("toDo__li");
        todoDiv.appendChild(newTodo);

        //Check and trash button

        const completedButton = document.createElement('button');
        completedButton.innerHTML = `<i class ='fas fa-check'></i>`
        completedButton.classList.add('completed-button');
        todoDiv.appendChild(completedButton);

        const trashButton = document.createElement('button');
        trashButton.innerHTML = `<i class ='fas fa-trash'></i>`
        trashButton.classList.add('trash-button');
        todoDiv.appendChild(trashButton);
        // add check and trash btn in toto-list
        todoList.appendChild(todoDiv);
    });
}

function removeLocalTodo(todo) {
    let todoArray;
    if (localStorage.getItem("todoArray") === null) {
        todoArray = [];
    } else {
        todoArray = JSON.parse(localStorage.getItem("todoArray"));
    }
    const indexOfTodos = todo.children[0].innerText;
    todoArray.splice(todoArray.indexOf(indexOfTodos), 1);
    localStorage.setItem("todoArray", JSON.stringify(todoArray));
}
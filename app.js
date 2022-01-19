// Selector
let todoInput = document.getElementById('input');
let todoList = document.getElementById('todo-list')
let todoButton = document.getElementById('btn');


//Event Listeners

todoButton.addEventListener('click', addToDo);
todoList.addEventListener('click', deleteCheck);


// Function
function addToDo(e) {
    e.preventDefault();
    //created div and li
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("toDo");

    const newTodo = document.createElement('li');
    newTodo.innerHTML = todoInput.value;
    todoInput.value = '';
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

}


function deleteCheck(e) {
    const item = e.target;
    if (item.classList[0] === 'trash-button') {
        const todo = item.parentElement;
        todo.remove();
    } else if (item.classList[0] === 'completed-button') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}
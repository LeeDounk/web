const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = todoForm.querySelector("input");

let toDos = [];

function saveToDos(){
    localStorage.setItem("toDos",JSON.stringify(toDos));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
}

function addTodo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText=newTodo;
    const button = document.createElement("button");
    button.innerText="X";
    button.addEventListener("click",deleteTodo)
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleTodoList(event){
    event.preventDefault();
    const value = todoInput.value;
    todoInput.value = "";
    toDos.push(value);
    addTodo(value);
    saveToDos();
}

todoForm.addEventListener("submit",handleTodoList);

const savedToDos = localStorage.getItem("toDos");
if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(addTodo); 
}

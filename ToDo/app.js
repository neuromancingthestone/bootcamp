const form = document.querySelector('#todoForm');
const todoInput = document.querySelector('input[name="todo"]');
const todoColor = document.querySelector('input[name="color"]');
const todoList = document.querySelector('#todo-list');
let todoArray = [];

todoList.addEventListener('click',function(e){
    //console.log(e.target.tagName);
    if(e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
        localStorage.removeItem(e.target.parentElement.tagName);
    } else if (e.target.tagName === 'LI') {
        e.target.classList.toggle('done');
    }
})

form.addEventListener('submit',function(e){ 
    e.preventDefault();
    const newTodo = addTodo(todoInput.value, todoColor.value);
    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'X';

    newTodo.appendChild(removeBtn);
    todoList.appendChild(newTodo);
});

function addTodo(text,color){
    const todo = document.createElement('li');  

    todo.innerText = text;
    todoArray.push(todo.innerText);    
    todo.style.color = color;
    localStorage.setItem('todoArray', JSON.stringify(todoArray));

    return todo;
}

function addLine() {
    
}

function loadTodo(){
    //console.log(JSON.parse(localStorage.todoArray));
    const loadTodos = JSON.parse(localStorage.todoArray);
    console.log(loadTodos);

    for(const todos of loadTodos) {
        const listLine = addTodo(todos,'black');
        const removeBtn = document.createElement('button');
        removeBtn.innerText = 'X';
        listLine.appendChild(removeBtn);
        todoList.appendChild(listLine);
        console.log(todos);
    }
}
loadTodo();



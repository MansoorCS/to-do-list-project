let inputBox = document.querySelector('#inputBox');
let addBtn = document.querySelector('#addBtn')
let TodoList = document.querySelector('#TodoList')

let getTodos = JSON.parse(localStorage.getItem('todo-list')) || [];


function addtodo(){
    if(inputBox.value.length < 1){
        alert('please write a todo');
         return;
    }
    let inputText = inputBox.value.trim();

        if(addBtn.value == 'Edit'){
            let todo = localInput.target.previousElementSibling.innerText;
            let todoIndex = getTodos.indexof(todo);
            getTodos[todoIndex] = inputBox.value;
            addBtn.value = 'Add'
            showLocalTodo()

        }else {

            getTodos.push(inputText);
            localStorage.setItem('todo-list',JSON.stringify(getTodos));
            inputBox.value = ''
            showLocalTodo()
        }
}
function showLocalTodo(){
    TodoList.innerHTML = getTodos.map(item =>
         <li>
                <p>${item}</p>
                <button class="btn edition">Edit</button>
                <button class="btn deletebtn">Delete</button>
            </li>
    ).join('')
    inputBox.value = ''

}
function updateTodo(e){
let value = e.target.innerText;
if(value=='Delete'){
    let todoText = e.target.parentElement.children[0].innerText;
    let todoIndex = getIndos.indexof(todoText);
    getTodos.splice(todoIndex,1);
    localStorage.setItem('todo-list',JSON.stringify(getTodos))
    showLocalTodo()


}
if(value == 'Edit'){
    inputBox.value = e.target.previousElementSibling.innerText;
    addBtn.value = 'Edit';
    inputBox.focus();
    localInput = e;
}

}
TodoList.addEventListener('click',updateTodo)
window.addEventListener('load',showLocalTodo)

addBtn.addEventListener('click',addTodo)
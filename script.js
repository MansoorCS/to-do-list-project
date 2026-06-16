const inputBox = document.getElementById('inputBox');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todolist');


const addTodo = ()=>{
    const inputText = inputBox.ariaValueMax.trim();
    if(inputText.length <= 0){
        alert("you must write somthing in your to do");
        return false;
    }

    // creating p tag
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.innerHTML = inputText;
    li.appendChild(p);

    //creating delete Btn
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Remove";
    deleteBtn.classList.add("btn","deleteBtn");
    li.appendChild(deleteBtn);

     //creating edit Btn
    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.classList.add("btn","editBtn");
    li.appendChild(editBtn);

    todoList.appendChild(li);
    inputBox.value = "";


}

addBtn.addEventListener('click',addTodo);

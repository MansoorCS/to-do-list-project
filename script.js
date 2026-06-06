const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
    const task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");
    li.className = "task-item";

    const taskText = document.createElement("span");
    taskText.className = "task-text";
    taskText.textContent = task;

    const btnDiv = document.createElement("div");

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit-btn";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    btnDiv.appendChild(editBtn);
    btnDiv.appendChild(deleteBtn);

    li.appendChild(taskText);
    li.appendChild(btnDiv);

    taskList.appendChild(li);

    taskInput.value = "";

    // Edit Task
    editBtn.addEventListener("click", function () {
        const newTask = prompt("Edit Task:", taskText.textContent);

        if (newTask !== null && newTask.trim() !== "") {
            taskText.textContent = newTask;
        }
    });

    // Delete Task
    deleteBtn.addEventListener("click", function () {
        li.remove();
    });
}
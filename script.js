const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    li.classList.add("task");

    const span = document.createElement("span");
    span.textContent = taskText;

    span.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("task-buttons");

    // Edit Button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit-btn");

    editBtn.addEventListener("click", () => {
        const updatedTask = prompt(
            "Edit your task:",
            span.textContent
        );

        if (updatedTask !== null && updatedTask.trim() !== "") {
            span.textContent = updatedTask.trim();
        }
    });

    // Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    buttonContainer.appendChild(editBtn);
    buttonContainer.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(buttonContainer);

    taskList.appendChild(li);

    taskInput.value = "";
    taskInput.focus();
}
alert("JavaScript работает!");
alert("JavaScript you're welcome!");

const button = document.getElementById("myButton");
const resetButton = document.getElementById("resetButton");
const message = document.getElementById("message");

let clicks = 0;

button.addEventListener("click", function() {
    clicks = clicks + 1;
    message.textContent = "Нажатий: " + clicks;
});

resetButton.addEventListener("click", function() {
    clicks = 0;
    message.textContent = "Нажатий: 0";
});

const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", function() {
    const taskText = taskInput.value;

    if (taskText === "") {
        return;
    }

    const newTask = document.createElement("li");
    newTask.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Удалить";

    newTask.appendChild(deleteButton);

    deleteButton.addEventListener("click", function() {
        newTask.remove();
    });
    newTask. addEventListener("click" , function() {
        newTask. classList. toggle("completed");
    });
    taskList.appendChild(newTask);

    taskInput.value = "";
});






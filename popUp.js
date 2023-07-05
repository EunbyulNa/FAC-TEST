// Function to open the create task pop-up
function openCreateTaskPopUp(element) {
    element.style.display = 'grid';
    console.log('Pop-up opened');
}

// Function to close the pop-up
function closePopUp() {
    userTaskTitle.value = '';
    userTaskDescription.value = '';
    createTaskPop.style.display = 'none';
    console.log('Pop-up closed');
}

// Variables
let createTaskPop = document.getElementById('create-task-inner');
let addTaskBtn = document.getElementById('add-task-button');
let cancelTaskBtn = document.querySelectorAll('.cancel-button');
let addTaskForm = document.getElementById('add-task-form');
let userTaskTitle = document.getElementById('task-title');
let userTaskDescription = document.getElementById('task-notes');
let taskItemHTML = "";
let taskContainer = document.getElementById('list-container');

// Event listeners
addTaskBtn.addEventListener('click', (event) => {
    event.preventDefault();
    openCreateTaskPopUp(createTaskPop);
});

for (let i = 0; i < cancelTaskBtn.length; i++) {
    cancelTaskBtn[i].addEventListener('click', closePopUp);
}
    
  
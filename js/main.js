// Variables

// Create task pop-up container
let addTaskPop = document.getElementById('create-task-inner');
let addTaskBtn = document.getElementById('add-task-button');
let addTaskForm = document.getElementById('add-task-form');

let userTaskTitle = document.getElementById('task-title');
let userTaskDescription = document.getElementById('task-notes');
let taskItemHTML = "";
let taskContainer = document.getElementById('list-container');

let toggleSwitch = document.querySelector('#switch');
let toggleMsg = document.querySelector('#toggle-msg');

// Placeholder task with default values
let placeholderTask = {
  title: 'Click on the button below to get started.',
  description: 'Time to get organised!',
  first: true,
  completedIcon: '<img tabindex="9" src="./images/user-controls/completed-control.png" class="completed-icon medium-icon">',
  deleteIcon: '<img tabindex="11" src="./images/user-controls/delete-control.png" class="delete-icon medium-icon">',    
}

// Tasks array with placeholder task and description
let tasks = [placeholderTask];



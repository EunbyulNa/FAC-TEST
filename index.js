// Variables

// Select all elements with class 'live-date'
let liveDates = document.querySelectorAll('.live-date');

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

// Create today's date 
const date = new Date();
const options = {
  weekday:"long",
  day:"numeric",
  month:"long",
  year:"numeric"
};

// Format the date as a string
const todayDate = date.toLocaleString("en-GB", options);

// Update all elements with class 'live-date' to display today's date
liveDates.forEach((date)=> {
  date.innerHTML = todayDate
})

// Tasks array with placeholder task and description
let tasks = [placeholderTask];

// Render tasks in the DOM
function renderTasksDOM() {
    taskItemHTML = `
    <div class="item-list grid">
        <div class="list-txt" tabindex="5">
            <p class="list-txt-title" tabindex="6">${tasks[tasks.length - 1].title}</p>
            <p class="list-txt-note" tabindex="7">${tasks[tasks.length - 1].description}</p>
        </div>
        <div class="user-controls flex" tabindex="8">
            ${tasks[tasks.length - 1].completedIcon}
            ${tasks[tasks.length - 1].deleteIcon}
        </div>       
    </div> 
    `;

    // Insert the new task at the beginning of the taskContainer
    taskContainer.insertAdjacentHTML('afterbegin', taskItemHTML);
    activateUserControls();
    console.log(tasks);
}

// Opens the create task pop-up
function openCreateTaskPopUp() {
  if(toggleSwitch.checked === true){
    // Uncheck the toggle switch and update toggle message
    toggleSwitch.checked = false;
    toggleMsg.textContent = "ALL";

    // Show all outstanding tasks
    document.querySelectorAll('#outstanding').forEach((out)=> {
      out.parentElement.parentElement.style.display = 'grid'
    })
  }
  
  // Display the create task pop-up
  addTaskPop.style.display = 'grid';
  console.log('Pop-up opened');   
}

// Adds user task to the tasks array
function removePlaceholderTask() {
    if (tasks[0].first) {
        // Clear the taskContainer and remove the placeholder task
        taskContainer.innerHTML = '';
        tasks.shift();
    };
};

function addUserTask() {
    if (userTaskTitle.value == "" || userTaskDescription.value == "") {
        // Display an alert if any field is empty
        alert("Please fill in all fields.");
    } 
    else {
        removePlaceholderTask();

        // Add the user task to the tasks array
        tasks.push({
            title: userTaskTitle.value,
            description: userTaskDescription.value,
            completedIcon: '<img tabindex="9" src="./images/user-controls/completed-control.png" class="completed-icon medium-icon">',
            deleteIcon: '<img tabindex="11" src="./images/user-controls/delete-control.png" class="delete-icon medium-icon">',     
        });

        // Close the create task pop-up
        closeAddPopUp();
    }

    // Render the updated tasks in the DOM
    renderTasksDOM();
    console.log(tasks);
}

// Closes the create task pop-up and resets the form
function closeAddPopUp() {
    userTaskTitle.value = '';
    userTaskDescription.value = '';
    addTaskPop.style.display = 'none';
    console.log('Create task pop-up closed');
}

// Makes all cancel buttons clickable and triggers the close create task pop-up function
function cancelButton() {
    cancelIcons = document.querySelectorAll('.cancel-button');
    cancelIcons.forEach((button, index) => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            closeAddPopUp();
            console.log('Cancel button clicked');
        });
    })
}

// Adds listener to complete button to add the task
addTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addUserTask();
});

// Adds listener to plus button to open the create task pop-up
addTaskBtn.addEventListener('click', (event) => {
    event.preventDefault();
    openCreateTaskPopUp();
});

// Makes the complete task and delete task icons functional
function activateUserControls() {
    const completedIcons = document.querySelectorAll('.completed-icon');
    const deleteIcons = document.querySelectorAll('.delete-icon');

    completedIcons.forEach((completed) => {
      completed.addEventListener('click', changeToCompleted);
    });
    
    deleteIcons.forEach((del) => {
      del.addEventListener('click', deleteTask);
    });
}

// Mark a task as completed
function changeToCompleted(e){
    console.log('clicked')
    const checkCompleted = e.target.parentElement.parentElement.firstElementChild;
    checkCompleted.classList.toggle('line-through');
}

// Delete a task
function deleteTask(e) {
    console.log('delete');
    const deleteIcon = e.target;
    deleteIcon.parentElement.parentElement.remove();
}

// Toggle switch event handler to show/hide completed tasks

const showCompleted = () => {
  if(toggleSwitch.checked === true){
    toggleMsg.textContent = "Show completed";

    // Hide all outstanding tasks
    let outstandingIcons = document.querySelectorAll('#outstanding');
    outstandingIcons.forEach((out)=> {
      out.parentElement.parentElement.style.display = 'none';
    });
  }
  else {
    toggleMsg.textContent = "ALL";

    // Show all outstanding tasks
    let outstandingIcons = document.querySelectorAll('#outstanding');
    outstandingIcons.forEach((out)=> {
      out.parentElement.parentElement.style.display = 'grid';
    });
  }
}

toggleSwitch.addEventListener('click', showCompleted);

// Functions called on page load
renderTasksDOM();
cancelButton();

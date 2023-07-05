// Variables

    //  Create task pop up container
let addTaskPop = document.getElementById('create-task-inner');
let addTaskBtn = document.getElementById('add-task-button');
let addTaskForm = document.getElementById('add-task-form');

let userTaskTitle = document.getElementById('task-title');
let userTaskDescription = document.getElementById('task-notes');
let taskItemHTML = "";
let taskContainer = document.getElementById('list-container');

// Tasks array with placeholder task and description
let tasks = [{
    title: 'Click on the button below to get started.',
    description: 'Time to get organised!',
    first: true,
    completedIcon: '<img tabindex="9" src="./images/user-controls/completed-control.png" class="completed-icon medium-icon">',
    editIcon: '<img tabindex="10" src="./images/user-controls/edit-control.png" class="edit-icon medium-icon">',
    deleteIcon: '<img tabindex="11" src="./images/user-controls/delete-control.png" class="delete-icon medium-icon">',     

}];

function renderTasksDOM() {
    taskItemHTML = `
    <div class="item-list grid">
                        <div class="outstanding-icon flex" tabindex="4">
                            <img class='medium-icon'src="./images/icons/outstanding.png" alt="">
                        </div>
                        <div class="list-txt" tabindex="5">
                          <p class="list-txt-title" tabindex="6">${tasks[tasks.length - 1].title}</p>
                          <p class="list-txt-note" tabindex="7">${tasks[tasks.length - 1].description}</p>
                        </div>
                      
                       <div class="user-controls flex" tabindex="8">
                        ${tasks[tasks.length - 1].completedIcon}
                        ${tasks[tasks.length - 1].editIcon}
                        ${tasks[tasks.length - 1].deleteIcon}
                       </div>       
                     </div> 
    `;
    taskContainer.insertAdjacentHTML('afterbegin', taskItemHTML);
    activateUserControls();
    console.log(tasks);
}

// Opens the create task pop-up
function openCreateTaskPopUp() {
    addTaskPop.style.display = 'grid';
    console.log('Pop-up opened');   
}

// Adds user task to the tasks array
function removePlaceholderTask() {
    if (tasks[0].first) {
        taskContainer.innerHTML = '';
        tasks.shift();
    };
};

function addUserTask() {
    if (userTaskTitle.value == "" || userTaskDescription.value == "") {
        alert("Please fill in all fields.");} 
    else {
        removePlaceholderTask();
        tasks.push({
            title: userTaskTitle.value,
            description: userTaskDescription.value,
            completedIcon: '<img tabindex="9" src="./images/user-controls/completed-control.png" class="completed-icon medium-icon">',
            editIcon: '<img tabindex="10" src="./images/user-controls/edit-control.png" class="edit-icon medium-icon">',
            deleteIcon: '<img tabindex="11" src="./images/user-controls/delete-control.png" class="delete-icon medium-icon">',     

        });
        closeAddPopUp();
    }
    renderTasksDOM();
    console.log(tasks);
}

// Closes the the create task pop-up and resets the form
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

// Makes the complete task, and delete task icons function
function activateUserControls() {
    const completedIcons = document.querySelectorAll('.completed-icon');
    const outstandingIcons = document.querySelectorAll('.outstanding-icon');
    const deleteIcons = document.querySelectorAll('.delete-icon');
  
    completedIcons.forEach((completed) => {
      completed.addEventListener('click', changeToCompleted);
    });
  
    outstandingIcons.forEach((outstanding) => {
      outstanding.addEventListener('click', changeToOutstanding);
    });
  
    deleteIcons.forEach((del) => {
      del.addEventListener('click', deleteTask);
    });
  }
  
  function changeToCompleted(e) {
    console.log('click');
    const completedIcon = e.target;
    if (completedIcon) {
      const outstandingIcon = completedIcon.parentElement.parentElement.querySelector('.outstanding-icon img');
      outstandingIcon.id = 'done';
      outstandingIcon.src = './images/user-controls/completed-control.png';
    }
  }
  
  function changeToOutstanding(e) {
    console.log('ch');
    const outstandingIcon = e.target;
    outstandingIcon.id = 'outstanding';
    outstandingIcon.src = './images/icons/outstanding.png';
  }
  
  function deleteTask(e) {
    console.log('delete');
    const deleteIcon = e.target;
    deleteIcon.parentElement.parentElement.remove();
  }

// Functions called on page load
renderTasksDOM();
cancelButton(); 
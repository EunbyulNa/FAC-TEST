
let editIcons;
let taskListTitles;
let taskListDescriptions;
let editTaskContainer = document.getElementById('edit-task-inner');
let editTaskGenerated = document.getElementById('edit-task-form');
let addedTaskTitle;
let addedTaskDescription;
let cancelIcons;

let editTaskForm = document.getElementById('edit-task-form');
let editTaskTitle;
let editTaskDescription;

function editButton() {
    editIcons = document.querySelectorAll('.edit-icon');
    taskListTitles = document.querySelectorAll('.list-txt-title');
    taskListDescriptions = document.querySelectorAll('.list-txt-note');

    editIcons.forEach((task, index) => {
        task.addEventListener('click', (event) => {
            event.preventDefault();
            console.log(`Edit button index number: ${index}`);
            console.log(taskListTitles[index].textContent);
            addedTaskTitle = taskListTitles[index].textContent;
            addedTaskDescription = taskListDescriptions[index].textContent;
            setEditPopContent();
            editTaskContainer.style.display = 'grid';
            cancelButton();
        }); 
    });
    
};

// adds listener to tick button to add the task
editTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Submit button clicked');
    let editTaskTitle = document.getElementById('edit-task-title');
    let editTaskDescription = document.getElementById('edit-task-notes');
    console.log(editTaskTitle.value);
    console.log(addedTaskTitle)
    console.log(editTaskDescription.value);
    addedTaskTitle = editTaskTitle.value;
    addedTaskDescription = editTaskDescription.value;
    taskItemHTML = 
    `<div class="item-list grid">
        <div class="outstanding-icon flex" tabindex="4">
            <img class='medium-icon'src="./images/icons/outstanding.png" alt="">
        </div>
        <div class="list-txt" tabindex="5">
            <p class="list-txt-title" tabindex="6">${addedTaskTitle}</p>
            <p class="list-txt-note" tabindex="7">${addedTaskDescription}</p>
        </div>
    
        <div class="user-controls flex" tabindex="8">
            <img tabindex="9" src="./images/user-controls/completed-control.png" class="completed-icon medium-icon">     
            <img tabindex="10" src="./images/user-controls/edit-control.png" class="edit-icon medium-icon">       
            <img tabindex="11" src="./images/user-controls/delete-control.png" class="delete-icon medium-icon">   
        </div>       
    </div> `;
    taskContainer.insertAdjacentHTML('beforeend', taskItemHTML);
    editButton();
    closeEditPopUp();
});

function cancelButton() {
    cancelIcons = document.querySelectorAll('.cancel-button');
    cancelIcons.forEach((button, index) => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            closeEditPopUp();
            closeAddPopUp();
            console.log('Cancel button clicked');
        });
    })
}

function setEditPopContent() {
    console.log('open edit popup');
    let editTaskPop = `
   
    <label for="task-title">Edit Title</label>
    <input type="text" name="task-title" id="edit-task-title" placeholder="${addedTaskTitle}">

    <label for="task-notes">Edit Notes</label>
    <textarea name="task-notes" id="edit-task-notes" placeholder="${addedTaskDescription}"></textarea>
    
    <div class="buttons-container">
        <button type="submit" class="" name="" value="Submit">
            <img src="images/icons/completed.png" class="large-button" alt="Blue circle with white tick to submit task">
        </button>
        <button type="button" class="cancel-button">
            <img src="images/icons/cancel.png" class="large-button" alt="Blue circle with cross to cancel adding task">
        </button>
    </div>

    `
    editTaskGenerated.insertAdjacentHTML('afterbegin', editTaskPop);
}

editButton();
cancelButton();
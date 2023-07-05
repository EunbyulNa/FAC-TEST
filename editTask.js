
let edits;
let taskListTitles;
let taskListDescriptions;
let editTaskContainer = document.getElementById('edit-task-inner');
let editTaskGenerated = document.getElementById('edit-task-form');
let addedTaskTitle;
let addedTaskDescription;
let cancels;



function editButton() {
    edits = document.querySelectorAll('.edit-icon');
    taskListTitles = document.querySelectorAll('.list-txt-title');
    taskListDescriptions = document.querySelectorAll('.list-txt-note');

    edits.forEach((task, index) => {
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

function cancelButton() {
    cancels = document.querySelectorAll('.cancel-button');
    cancels.forEach((button, index) => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            closeEditPopUp();
            closePopUp();
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

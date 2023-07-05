
let edits;
let taskListTitles;
let editTaskPop;
let addedTaskTitle;

// function openCreateTaskPopUp() {



function addListensToButton() {
    edits = document.querySelectorAll('.edit-icon');
    taskListTitles = document.querySelectorAll('.list-txt-title');

    edits.forEach((task, index) => {
        task.addEventListener('click', (event) => {
            event.preventDefault();
            console.log(`Edit button index number: ${index}`);
            console.log(taskListTitles[index].textContent);
            addedTaskTitle = taskListTitles[index].textContent;
            setEditPopContent();
        });
            // console.log('Open edit pop up')
            // openCreateTaskPopUp(editTaskPop);  
    });
};

addListensToButton();

function setEditPopContent() {
// function openEditPopup() {
    console.log('open edit popup');
    editTaskPop = `
    <div id="edit-task-inner" style="display: grid;">
                <h2>Edit Task</h2>
                <!-- <h3 class="live-date small-text">Friday 30th June</h3> -->
    
                <form class="small-text" id="edit-task-form">
                    <label for="task-title">Edit Title</label>
                    <input type="text" name="task-title" id="edit-task-title" placeholder="${addedTaskTitle}">
    
                    <label for="task-notes">Edit Notes</label>
                    <textarea name="task-notes" id="edit-task-notes"></textarea>
    
                    <div class="buttons-container">
                        <button type="submit" class="" name="" value="Submit">
                            <img src="images/icons/completed.png" class="large-button" alt="Blue circle with white tick to submit task">
                        </button>
                        <button type="button" class="cancel-button">
                            <img src="images/icons/cancel.png" class="large-button" alt="Blue circle with cross to cancel adding task">
                        </button>
                    </div>
                </form>
            </div>
    `
    taskContainer.insertAdjacentHTML('beforeend', editTaskPop);
}
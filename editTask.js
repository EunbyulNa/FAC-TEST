
let edits;
let taskListTitles;
let editTaskPop;

// function openCreateTaskPopUp() {



function addListensToButton() {
    edits = document.querySelectorAll('.edit-icon');
    taskListTitles = document.querySelectorAll('.list-txt-title');

    edits.forEach((task, index) => {
        task.addEventListener('click', (event) => {
            event.preventDefault();
            console.log(`Edit button index number: ${index}`);
            console.log(taskListTitles[index].textContent);
        });
            // console.log('Open edit pop up')
            // openCreateTaskPopUp(editTaskPop);  
    });
};

addListensToButton();

function openEditPopup() {
    console.log('open edit popup');
}
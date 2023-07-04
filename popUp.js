let createTaskPop = document.getElementById('create-task-inner');
let addTaskBtn = document.getElementById('add-task-button');
  
// open create task pop up
addTaskBtn.addEventListener('click', (event) => {
    event.preventDefault();
    createTaskPop.style.display = 'grid';

    console.log('Create task pop up opened');
});
  
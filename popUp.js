// VARIABLES
    // the create/edit task pop up boxes
    let createTaskPop = document.getElementById('create-task-inner');   

    //  BUTTON VARIABLES
        // the blue plus button for adding a new task
    let addTaskBtn = document.getElementById('add-task-button');
    
        // close pop up blue cross button
    let cancelTaskBtn = document.querySelectorAll('.cancel-button');
    
    
    // EVENT LISTENERS
      
    // open create task pop up
    addTaskBtn.addEventListener('click', (event) => {
        event.preventDefault();
        createTaskPop.style.display = 'grid';
    
        console.log('Create task pop up opened');
    });
    
    // close popup
    for (let i = 0; i < cancelTaskBtn.length; i++) {
        cancelTaskBtn[i].addEventListener('click', () => {
            createTaskPop.style.display = 'none';
            console.log('Closed popup');
        });
    }
    
    
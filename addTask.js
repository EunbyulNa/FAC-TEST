let searchTaskList = document.getElementById('existing-tasks-select');

// Add user task to the list
 
function addUserTask() {
    if (userTaskTitle.value == "" || userTaskDescription.value == "") {
        alert("Please fill in all fields.");} 
    else {
        taskItemHTML = 
        `<div class="item-list grid">
            <div class="outstanding-icon flex" tabindex="4">
                <img class='medium-icon'src="./images/icons/outstanding.png" alt="">
            </div>
            <div class="list-txt" tabindex="5">
                <p class="list-txt-title" tabindex="6">${userTaskTitle.value}</p>
                <p class="list-txt-note" tabindex="7">${userTaskDescription.value}</p>
            </div>
        
            <div class="user-controls flex" tabindex="8">
                <img tabindex="9" src="./images/user-controls/completed-control.png" class="completed-icon medium-icon">     
                <img tabindex="10" src="./images/user-controls/edit-control.png" class="edit-icon medium-icon">       
                <img tabindex="11" src="./images/user-controls/delete-control.png" class="delete-icon medium-icon">   
            </div>       
        </div> `;

        
        let searchTaskItemHTML = `<option value="${userTaskTitle.value}"></option>`;

        taskContainer.insertAdjacentHTML('beforeend', taskItemHTML);
        searchTaskList.insertAdjacentHTML('beforeend', searchTaskItemHTML);

        editButton();
        closePopUp();
    }
  };

// adds listener to tick button to add the task
addTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addUserTask();
});


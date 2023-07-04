let searchTaskList = document.getElementById('existing-tasks-select');
let searchTaskItemHTML = '';

// Add user task to the list

addTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
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
                <img tabindex="9"class='medium-icon' src="./images/user-controls/completed-control.png"id="completed-icon">     
                <img tabindex="10"class='medium-icon' src="./images/user-controls/edit-control.png"id="edit-icon">       
                <img tabindex="11"class='medium-icon' src="./images/user-controls/delete-control.png"id="delete-icon">   
            </div>       
        </div> `;

        
        searchTaskItemHTML = 
        `<option value="${userTaskTitle.value}"></option>`;

        taskList.insertAdjacentHTML('beforeend', taskItemHTML);
        searchTaskList.insertAdjacentHTML('beforeend', searchTaskItemHTML);
        console.log('Task Added');
        closePopUp();
    }
  });

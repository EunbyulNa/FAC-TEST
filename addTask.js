let searchTaskList = document.getElementById('existing-tasks-select');

// Add user task to the list
 
function addUserTask() {
    if (userTaskTitle.value == "" || userTaskDescription.value == "") {
        alert("Please fill in all fields.");} 
    else {
        taskItemHTML = 
        `<div class="item-list grid">
            <div class="outstanding-icon flex" tabindex="4">
                <img class="outstanding-icon-img medium-icon" src="./images/icons/outstanding.png" alt="" id="outstanding">
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
        closeAddPopUp();


let edits = document.querySelectorAll('.edit-icon');
let completedIcons = document.querySelectorAll('.completed-icon');
let outstandingIcons = document.querySelectorAll('.outstanding-icon-img');





const changeToCompleted = (e) => { 
    console.log('click')
  const completedIcon = e.target
  if(completedIcon){
    const outstandingIcon = completedIcon.parentElement.parentElement.querySelector('.outstanding-icon img');
    outstandingIcon.id = 'done'
    outstandingIcon.src = './images/user-controls/completed-control.png';
  }
}

const changeToOutstanding = (e) => {
    console.log('ch')
    const outStadningIcon = e.target;
    outStadningIcon.id = 'outstanding'
    outStadningIcon.src = './images/icons/outstanding.png';
   }

completedIcons.forEach((completed)=> {
    completed.addEventListener('click',  changeToCompleted)
})

outstandingIcons.forEach((outstanding)=> {
    outstanding.addEventListener('click',  changeToOutstanding)
})
        
    }
  };

// adds listener to tick button to add the task
addTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addUserTask();
});

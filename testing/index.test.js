test('Update list to be completed', () => { 
  //Get completed icon
  const completedIcon= document.querySelector('.completed-icon');

  //Create mock Event, event object, modify target property
  const mockEvent = {
  target: completedIcon
  };
  //Excute changeToCompleted with mockevent object parameter
  changeToCompleted(mockEvent);
  const checkCompleted = completedIcon.parentElement.parentElement.firstElementChild;
  const actualAfter = checkCompleted.classList.contains('line-through');
  //Check class list contain line-through 
  equal(actualAfter, true);
  //Reset classList
  checkCompleted.classList.remove('line-through');
});


test('Hide completed tasks, and update the textcontent', ()=> {

  const toggleSwitch = document.querySelector('#switch');
  const toggleMsg = document.querySelector('#toggle-msg');
  const completedIcon= document.querySelector('.completed-icon');

  const mockEvent = {
    target: completedIcon
  }
 
  changeToCompleted(mockEvent);
 
  toggleSwitch.checked = true;
  showOutStanding()

  equal(toggleMsg.textContent, 'Show Outstanding')
  
  const completedTasks = document.querySelector('.line-through').parentElement
  const completedTasksDisplay = window.getComputedStyle(completedTasks).display
  equal(completedTasksDisplay, 'none')

  //Reset default value
  toggleSwitch.checked = false;
  toggleMsg.textContent = 'ALL'

})
  
// Adding tasks
  test('Passing test: Tasks length is 1 on page load', () => { 
    const actual = 1;
    const result = tasks.length
   equal(actual, result);
  })

  test('Passing test: Adding 1st task replaces the placeholder', () => {
    const actual = tasks[0];
    userTaskTitle.value = 'Go bake a cake';
    userTaskDescription.value = 'Buy flour, eggs, butter';
    addUserTask();
    const result = tasks[0];
    notEqual(actual.title, result.title);  
    notEqual(actual.description, result.description); 

    // reset the page
    tasks[0] = placeholderTask;
    taskContainer.innerHTML = '';
    renderTasksDOM();   
  })

  test('Passing test: Adding 1st task adds it to the list ', () => {
    const actualTitle = 'Go bake a cake';
    const actualDescription = 'Buy flour, eggs, butter';
    userTaskTitle.value = actualTitle;
    userTaskDescription.value = actualDescription;
    addUserTask();
    const resultTitle = tasks[0].title;
    const resultDescription = tasks[0].description;
    equal(resultTitle, actualTitle);
    equal(resultDescription, actualDescription);

    // reset the page
    tasks = [];
    tasks[0] = placeholderTask;
    taskContainer.innerHTML = '';
    renderTasksDOM();
  })

  test('Passing test: Adding task (not 1st) adds it to the list', () => {
    const actualTitle = 'Become an olympic sprinter';
    const actualDescription = 'Buy some running shoes';
    tasks[0].first = false;
    userTaskTitle.value = actualTitle;
    userTaskDescription.value = actualDescription;
    addUserTask();
    const resultTitle = tasks[1].title;
    const resultDescription = tasks[1].description;

    equal(resultTitle, actualTitle);
    equal(resultDescription, actualDescription);

    // reset the page
    tasks = [];
    tasks[0] = placeholderTask;
    tasks[0].first = true; // important! otherwise when user adds first task the placeholder is not replaced
    taskContainer.innerHTML = '';
    renderTasksDOM();
  })

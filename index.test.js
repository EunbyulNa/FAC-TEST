test('Update icon image', () => {
  // Get the outstanding icon element
  const outstandingIcon = document.querySelector('.outstanding-img-icon');

  // Create a mock event object with a target property
  const mockEvent = {
    target: outstandingIcon,
  };

  // Get the actual source of the icon before the change
  const actualBefore = outstandingIcon.getAttribute('src');

  // Call the function or perform the action that updates the icon from outstanding to completed
  changeToCompleted(mockEvent);

  // Get the updated source of the icon after the change
  const actualAfter = outstandingIcon.getAttribute('src');

  // Assert that the updated source matches the expected value
  equal(actualAfter, './images/user-controls/completed-control.png');
});


  
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

  // test('Clicking add button opens popup', () => { 
  //  })

// Deleting tasks

  // test('Deleting a task removes it from the page', () => {   
  //  })
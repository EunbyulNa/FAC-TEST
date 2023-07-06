function performTest() {
    const expectedIcon = "./images/user-controls/completed-control.png"
    
    // select outstadning icon, and check outstadning icon's src 
    const outstadningIcon = document.querySelector('.outstanding-icon img')
    const actual = outstadningIcon.getAttribute('src')

    //Check actual and expectedIcon are equal or not
    equal(actual,expectedIcon);

    //Reset outstanding icon src 
    outstadningIcon.setAttribute('src',  './images/icons/outstanding.png')
   
  }
  
  //Click completedIcon, perfomTest will excute
  const completedIcon = document.querySelector('.completed-icon')
  completedIcon.addEventListener('click', performTest);
  
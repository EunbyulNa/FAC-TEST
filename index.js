let allTaskCard = document.querySelector('#allTask');
let listContainer = document.querySelector('.list-type-container');
let tasksPage = document.querySelector('#tasks-page');
let home = document.querySelector('#home')

const showHideAllTask = (e) => {
  e.preventDefault()
  listContainer.style.display = 'none';
  tasksPage.style.display = 'block'
 }
 
 const backMainPage = (e) => {
  e.preventDefault()
 
  tasksPage.style.display = 'none'
 }
 

allTaskCard.addEventListener('click', showHideAllTask)
home.addEventListener('click', backMainPage)



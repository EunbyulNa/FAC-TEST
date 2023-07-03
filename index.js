let allTaskCard = document.querySelector('#allTask');
let listWrap = document.querySelector('.list-wrap');
let tasksPage = document.querySelector('#tasks-page');
let homeIcon = document.querySelector('#home');

const showAllTaskPage = (e) => {
  e.preventDefault();
  listWrap.style.display = 'none';
  tasksPage.style.display = 'block';
 }
 
 const goBackToMain = (e) => {
  e.preventDefault();
  listWrap.style.display = 'block';
  tasksPage.style.display = 'none';
 }
 

allTaskCard.addEventListener('click', showAllTaskPage);
homeIcon.addEventListener('click', goBackToMain);






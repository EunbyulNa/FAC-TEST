let allTaskCard = document.querySelector('#allTask');
let listWrap = document.querySelector('.list-wrap');
let tasksPage = document.querySelector('#tasks-page');
let homeIcon = document.querySelector('#home');
let liveDates = document.querySelectorAll('.live-date');

const date = new Date();
const options = {
  weekday:"long",
  day:"numeric",
  month:"long",
  year:"numeric"
};

const todayDate = date.toLocaleString("en-GB", options);

liveDates.forEach((date)=> {
  date.innerHTML = todayDate
})

/*
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
*/


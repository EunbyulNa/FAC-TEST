// Select all elements with class 'live-date'
let liveDates = document.querySelectorAll('.live-date');

// Create today's date 
const date = new Date();
const options = {
  weekday:"long",
  day:"numeric",
  month:"long",
  year:"numeric"
};

// Format the date as a string
const todayDate = date.toLocaleString("en-GB", options);

// Update all elements with class 'live-date' to display today's date
liveDates.forEach((date)=> {
  date.innerHTML = todayDate;
});

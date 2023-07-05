
let toggleSwitch = document.querySelector('#switch');

const showCompleted = () => {
  if(toggleSwitch.checked === true){
    console.log('on')
    document.querySelectorAll('#outstanding').forEach((out)=> {
      out.parentElement.parentElement.style.display = 'none'
    })
    
  }
}

 toggleSwitch.addEventListener('click', showCompleted)
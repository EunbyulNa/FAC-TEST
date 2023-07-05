
let toggleSwitch = document.querySelector('#switch');
let toggleMsg = document.querySelector('#toggle-msg')

const showCompleted = () => {
  if(toggleSwitch.checked === true){
    console.log('on')
    toggleMsg.textContent = "Show completed"
    document.querySelectorAll('#outstanding').forEach((out)=> {
      out.parentElement.parentElement.style.display = 'none'
    })
    
  }else{
    toggleMsg.textContent = "ALL"
    document.querySelectorAll('#outstanding').forEach((out)=> {
        out.parentElement.parentElement.style.display = 'grid'
      })
  }
}

 toggleSwitch.addEventListener('click', showCompleted)
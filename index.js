
const submitBtn = document.querySelector('button');
let arr = [];

submitBtn.addEventListener('click', ()=>{

  //select ul, input value 
  let uL = document.querySelector(".myUL");
  let newInput = document.querySelector(".listAdd").value;

  //Store in LocalStorage
  arr.push(newInput)
  localStorage.setItem("List", arr);
   
  //create list  
   let newLi = document.createElement("li"); 
   let newInputtxt = document.createTextNode(newInput);

   //append child 
   newLi.appendChild(newInputtxt);
   uL.appendChild(newLi);
    
 
   //Empty the value 
   document.querySelector('.listAdd').value = '';    
})






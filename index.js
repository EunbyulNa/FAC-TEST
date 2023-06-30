
const submitBtn = document.querySelector('button');
let arr = [];

function addItem(){
 //select ul, input value 
 let uL = document.querySelector(".myUL");
 let newInput = document.querySelector(".listAdd").value;

 //Store in LocalStorage
 arr.push(newInput)
 localStorage.setItem("List",  JSON.stringify(arr));
  
 //create list  
  let newLi = document.createElement("li"); 
  let newInputtxt = document.createTextNode(newInput);

  //append child 
  newLi.appendChild(newInputtxt);
  uL.appendChild(newLi);
   
  //Empty the value 
  document.querySelector('.listAdd').value = '';    
}

submitBtn.addEventListener('click', addItem)

function equal(actual, expected, message) {
    if (actual === expected) {
      const defaultMessage = `Expected ${expected} and received ${actual}`;
      console.info("Pass: " + (message || defaultMessage));
    } else {
      const defaultMessage = `Expected ${expected} but received ${actual} instead`;
      console.error("Fail: " + (message || defaultMessage));
    }
  }

  function test(name, testFunction) {
    console.group(name);
    testFunction();
    console.groupEnd(name);
  }

  test('A new item add in the local storage correctly, and disply correctly ', ()=> {
     //get input 
     let newInput = document.querySelector(".listAdd");
     //enter test data into inputs
     newInput.value = "Buy food";
     //submit the form
     const submitBtn = document.querySelector('button');
     submitBtn.click();
     //verify that the page contains the expected result 
     let result = document.querySelector('li');
     equal(result.textContent, "Buy food")
     //reset the input
     newInput.value = '';

    //Check local storage array length 
    let expected = 1;
    let output = JSON.parse(localStorage.getItem('List')).length

    equal(output, expected)
  })




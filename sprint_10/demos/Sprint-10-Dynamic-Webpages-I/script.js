// let title = document.getElementById("title")
// console.log(title)
// console.log(title.innerText)


let squaredResult = document.getElementById("squared-result");
let cubedResult = document.getElementById("cubed-result");
let inputNumber = document.getElementById("input-number");
let historyContainer = document.getElementById("history-container");


function calculateResult (){ 
  squaredResult.innerText = inputNumber.value * inputNumber.value;
  cubedResult.innerText = inputNumber.value * inputNumber.value* inputNumber.value;

 let newNumber = document.createElement('p');
 newNumber.innerText = inputNumber.value;
 newNumber.setAttribute("id","search")
 historyContainer.appendChild(newNumber);
  
 inputNumber.value = ""; 
}  

function deleteLastEntry (){
  historyContainer.removeChild(historyContainer.lastChild)
  squaredResult.innerText = '?';
  cubedResult.innerText = '?';
}

function clearHistory(){
    while(historyContainer.firstChild){
     historyContainer.removeChild(historyContainer.lastChild);
    //  console.log('deleted')
    }
    
    squaredResult.innerText = '?';
    cubedResult.innerText = '?';
}



 
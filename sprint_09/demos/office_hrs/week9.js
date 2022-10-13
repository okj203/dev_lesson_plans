//CHALLENGE#1
// Given an object of how many more pages each ink color can print, output the maximum number of pages the printer can print before any of the colors run out.

//Test Object
const colors={
    cyan: 23,
    magenta: 12,
    yellow: 10
} 


function inkLevels (object){
  let numbers = Object.values(object)
  let smallestNumber=numbers[0];

  for(let i =0;i<numbers.length;i++){
    //  if(numbers[i]<smallestNumber ){
    //     smallestNumber = numbers[i]
    //  }
    numbers[i]<smallestNumber ? smallestNumber = numbers[i] : null 
  }
  return smallestNumber;
}

console.log(inkLevels(colors))




//CHALLENGE#2
// Create the function that takes an array with objects and returns the sum of people's budgets.

// Test Array
const budgets = [
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
]

function getBudgets (array){
  let total =0;
  for (let i=0;i<array.length;i++){
   total += array[i].budget
  }
  return total;
}

console.log(getBudgets(budgets))







//CHALLENGE#3
// Given two arrays, which represent two sandwiches, return whether both sandwiches use the same type of bread. The bread will always be found at the start and end of the array.
//Test array
const sandwichOne = ["white bread", "lettuce", "brown bread"];
const sandwichTwo = ["white bread", "tomato", "white bread"];

function checkBread(array1,array2){
  let result = array1.shift()===array2.shift() && array2.pop()===array1.pop()
  return result;
}

console.log(checkBread(sandwichOne,sandwichTwo))
// Create a function that takes an array and returns the types of values (data types) in a new array.

// function arrayValuesTypes (array){
//    let newArray=[];
//    for(let i=0;i<array.length;i++){
//        newArray.push(typeof(array[i]));   
//    }
//    return newArray;
// }

// let myList = [25,'Elif',true];

// console.log(arrayValuesTypes(myList));




// Create a function which returns the total of all odd numbers up to and including randomNumber. randomNumber will be given as an odd number.

// function addOddToNumber(number){
//    let total=0;
//    for(let i=1;i<=number;i+=2){
//       total+=i;
//    }
//    return total;
// }

// console.log(addOddToNumber(9));



function total (array){
   let first = array[1];
   let second = array[array.length-2]
   return first + second;
}
let numbers = [4,5,6,7,10]; 
console.log(total(numbers));

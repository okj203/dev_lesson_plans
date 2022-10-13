// let myNumber=5;
// myNumber=myNumber+1;
// myNumber += 1;
// myNumber -=2;
// myNumber++;
// myNumber--;
// console.log(myNumber);


// let myName="Elif";
// myName= myName+" Balci";
// console.log(myName);


// WHILE AND FOR LOOPS

// while(condition){
//     action
// }

// let counter= 5;
// while(counter<=10){
//     console.log('Elif');
//     counter++;
// }

// let bottleNumber= 99;
// while(bottleNumber>=1){
//     console.log(bottleNumber + " bottles on the wall");
//     bottleNumber--;
// }

// let guess = prompt('Enter a number');

// if (guess==10) {
//     alert("from line 36.That is correct!")
// } else {
//     while (guess!=10) {
//         if(guess>10){
//             alert('Enter a lower number');
//         } else if (guess<10){
//             alert('Enter a higher number');
//         } 
//         guess = prompt('Enter a number');
//     }
//     alert("That is correct!")
// } 



// for(let i=0;i<=10;i++){
//   console.log(i);
// }


// for (let i=50;i>=10;i-=5){
//     console.log(i)
// }







let budget = 500;
let mealCost = 21;

let maximumMealNumber = Math.floor(budget/mealCost);
// console.log(maximumMealNumber)

for(let i=1;i<=maximumMealNumber;i++){
  let remainingBudget = (budget- (mealCost*i));
  console.log('Remaining budget = ' + remainingBudget );
  if(remainingBudget<mealCost){
    console.log('You cannot eat anymore!')
  }
}














































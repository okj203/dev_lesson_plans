// *****************************************************************************/
// * Title: "Sprint-09-Objects" source code
// * Author: Elif Balci
// * Availability: https://github.com/mimodevs/cohort_11/tree/main/js-live-sessions/Sprint-09-Objects
// ****************************************************************************/

// const info = ['Elif',25,true];
// info[0]= 'Uwe';
// console.log(info);

// const user = {
//     name:'Elif', //key-value pairs
//     age:25,//property
//     smart:true
// }
// user.name = 'Ana';
// console.log(user);


// const user = {
//     name:'Elif', //key-value pairs
//     age:25,//property
//     smart:true,
//     favoriteFruits:['apples','oranges','berries']
// }
// user.favoriteFruits[1]='pears'
// console.log(user)


// const user = {
//     name:'Elif', //key-value pairs
//     age:25,//property
//     smart:true,
//     favoriteFruits:['apples','oranges','berries'],
//     sayMyName: function (){
//         console.log('Ana');
//     } // method
// }

// user.sayMyName();

// const user = {
//     name:'Elif', //key-value pairs
//     age:25,//property
//     smart:true,
//     favoriteFruits:['apples','oranges','berries'],
//     sayMyName: function (){
//         console.log(this.name);
//     }, // method
//     ageInTenYears: function (){
//         console.log(this.age+10)
//     }
// }

// user.sayMyName();
// user.ageInTenYears();


// const user = {
//     name:'Elif', //key-value pairs
//     age:25,//property
//     smart:true,
//     favoriteFruits:['apples','oranges','berries'],
//     sayMyName: function (){
//         console.log(this.name);
//     }, // method
//     ageInTenYears: function (){
//         console.log(this.age+10)
//     },
//     favoriteFoods: {
//         sweet: 'apple pie',
//         savory: 'steak'
//     }
// }

// console.log(user.favoriteFoods.savory);




// const boxOne = {
//     width:5,
//     height:10,
//     length:7
// }
const boxTwo = {
    width:6,
    height:10,
    length:7
}

// volume = width*height*length

// function getBoxVolume(object){
//     return object.width*object.height*object.length;
// };
// console.log(getBoxVolume(boxOne));


const cityOne = {
  name:'London',
  population:'9M',
  continent:'Europe'
}

const cityTwo = {
  name:'Bangkok',
  population:'8M',
  continent:'Asia'
}

// Create a function that takes an object as an argument and returns the following strings depending on the continent:
// Asia: 'It is too far.'
// Europe: 'It is close.'
// Australia: 'It is down under.'

// function getHowFar (object){
//     if(object.continent === "Asia"){
//       return "it is too far"
//     } else if ( object.continent === "Europe"){
//       return "It is close"
//     }else if (object.continent === "Europe"){
//       return "It is down under"
//     }
// }

function getHowFar (object){
    switch(object.continent){
        case "Asia":
            return "it is too far";
            break;
        case "Europe":
            return "It is close";
            break;
        case "Australia":
            return "It is down under"
            break;
        default:
            return "Unknown location"
    }
}

let result = getHowFar(cityTwo)

console.log(`The answer is ${result}`);



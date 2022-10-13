 import {data} from './data.js'
 let container = document.querySelector('.container');
 let allButton = document.querySelector('.all-button');


// function getAllPeople (){
//     data.map(item=>{
//         let personContainer = document.createElement('div');
//         personContainer.setAttribute('class','person-container');
//         container.appendChild(personContainer);
     
//         let image = document.createElement('img');
//         image.setAttribute('src',item.imageUrl);
//         image.classList.add('person-image')
     
//         let username = document.createElement('h2');
//         username.innerText = item.username;
     
//         let country = document.createElement('p');
//         country.innerText=item.country;
     
//         let description = document.createElement('p');
//         description.innerText = item.description;
       
//         personContainer.append(image,username,country,description)
     
//       })
// }

allButton.addEventListener('click',()=>{
    container.innerHTML = ' ';
    data.map(item=>{
        let personContainer = document.createElement('div');
        personContainer.setAttribute('class','person-container');
        container.appendChild(personContainer);
     
        let image = document.createElement('img');
        image.setAttribute('src',item.imageUrl);
        image.classList.add('person-image')
     
        let username = document.createElement('h2');
        username.innerText = item.username;
     
        let country = document.createElement('p');
        country.innerText=item.country;
     
        let description = document.createElement('p');
        description.innerText = item.description;
       
        personContainer.append(image,username,country,description)
     
      })
})






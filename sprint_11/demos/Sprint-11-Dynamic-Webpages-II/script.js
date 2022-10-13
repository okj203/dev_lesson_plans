
let allImages = [
    'assets/flower1.jpeg',
    'assets/flower2.jpeg',
    'assets/flower3.jpeg',
    'assets/flower4.jpeg'
]

let indexNumber =1;
function changeImage(){
    let image = document.querySelector('img');
    image.setAttribute('src',allImages[indexNumber]);

    if(indexNumber === allImages.length-1){
        indexNumber=0;
    }else{
        indexNumber++;
    }

}


function addBgColor(){
    let container = document.querySelector('.container');
    container.classList.toggle("blue-bg");
    let buttonBg = document.querySelector(".bg-button");
    if(buttonBg.innerText==="add bg"){
        buttonBg.innerText = "remove bg"
    }else{
        buttonBg.innerText="add bg"
    }
}

function toggleStyle (){
    let image = document.querySelector('img');
    image.classList.toggle("better-img");

   let allButtons = document.getElementsByTagName('button');
//    allButtons[0].style.backgroundColor = "orange"
    // allButtons[0].classList.toggle("all-buttons")
    // allButtons[1].classList.toggle("all-buttons")
    // allButtons[2].classList.toggle("all-buttons")

    for(let i=0;i<allButtons.length;i++){
        allButtons[i].classList.toggle("all-buttons")
    }

    let styleButton = document.querySelector(".style-btn");


   if(styleButton.innerText==="Basic style"){
    styleButton.innerText = "switch to better style"
   }else{
    styleButton.innerText="Basic style"
   }


} 


let myString = `<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, quam. Corporis quia quisquam fuga ab fugit. Dignissimos quas suscipit facere, iure debitis ipsam? Itaque totam, saepe eum beatae ea alias?
</p><img src="https://picsum.photos/200/300"/>`

function changeinnerText (){
 let container = document.querySelector(".content")
 container.innerText= myString ;
}

function changeinnerHTML (){
    let container = document.querySelector(".content")
    container.innerHTML= myString;
}







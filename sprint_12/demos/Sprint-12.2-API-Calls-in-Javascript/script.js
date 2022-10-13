let search =' ';
const apiKey = '6b99eeb170212fac17a179bd3c7bdfb9';

const cityName =document.querySelector('#city-name');
const temperature =document.querySelector('#temperature');
const feelsLike =document.querySelector('#feels-like');
const windSpeed =document.querySelector('#wind-speed');
const cityForm =document.querySelector('#city-form');
const cityInput = document.querySelector('#city-input');
const weatherIcon = document.querySelector('#weather-icon');

cityForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    search = cityInput.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${apiKey}`)
    .then(res=>res.json())
    .then(data=>{
        cityName.innerText = data.name;
        temperature.innerText= data.main.temp; 
        feelsLike.innerText= data.main.feels_like;
        windSpeed.innerText= data.wind.speed;
        let iconLink=data.weather[0].icon;
        weatherIcon.setAttribute('src',`https://openweathermap.org/img/wn/${iconLink}@2x.png`)
    })
})



//QUOTE GENERATOR

// GET/POST/PUT/DELETE //CRUD requests

let page = Math.ceil(Math.random()*7268)
let index = Math.floor(Math.random()*10) 
fetch(`https://quote-garden.herokuapp.com/api/v3/quotes?page=${page}`)
.then(res=>res.json())
.then(data=>{
    console.log(data.data[index].quoteText)
})





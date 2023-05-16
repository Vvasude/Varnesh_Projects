
//Create a const to hold the api Key and URL
const apiKey = "c40eb18f4f7c3bceb8d0897bfec4bb06";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

//get user input 
const searchInput = document.querySelector(".search input");
//Search button functionality 
const searchButton = document.querySelector(".search button");

const weatherIMG = document.querySelector(".weather-image");

//created a function to send the text in search bar tp the checkweather function
    searchButton.addEventListener("click",()=>{
        checkWeather(searchInput.value);
    })

//create an asynchronous function in order to check the Weather on client search
async function checkWeather(city){
    const response = await fetch(apiURL+ city + `&appid=${apiKey}`);
    
    //logic check to see if the entered city is a real place or not
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
 //get all weather data from specific city
    var weatherData = await response.json();

/*
Javascript DOM intialization
im going to attach all the elements I want to update every API call done 

***NOTE***
Can use innerHTML instead of textContent to make life easier, however, keep in mind innerHTML is prone to injection attacks so it wouldn't be safe to use this method for a public application
*/


        console.log(weatherData);
    document.querySelector(".city").innerHTML = weatherData.name;

    document.querySelector(".temperature").innerHTML = Math.round(weatherData.main.temp) + "°C";
    
    document.querySelector(".humidity").innerHTML = weatherData.main.humidity + "%";
    
    document.querySelector(".wind").innerHTML = weatherData.wind.speed + "Km/h";

    //logic statements to show the corresponding png for the weather
    
    if(weatherData.weather[0].main == "Clouds" ){
        weatherIMG.src = "./images/clouds.png"
    }
    else if(weatherData.weather[0].main== "Clear" ){
        weatherIMG.src = "./images/clear.png"
    }
    else if(weatherData.weather[0].main == "Rain" ){
        weatherIMG.src = "./images/rain.png"
    }
    else if(weatherData.weather[0].main == "Drizzle" ){
        weatherIMG.src = "./images/drizzle.png"
    }
    else if(weatherData.weather[0].main== "Mist" ){
        weatherIMG.src = "./images/mist.png"
    }
    else if(weatherData.weather[0].main== "Snow" ){
        weatherIMG.src = "./images/snow.png"
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }
}


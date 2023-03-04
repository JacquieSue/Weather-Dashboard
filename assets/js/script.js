// ready to use w/ API key- http://api.openweathermap.org/geo/1.0/zip?zip=E14,GB&appid={86c03a249512cef92213348475754024}
//api.openweathermap.org/data/2.5/weather?q={city name}&appid={86c03a249512cef92213348475754024}
//var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + 86c03a249512cef92213348475754024;
// {lon: -117.1573, lat: 32.7153}

var cityWeather = {}
var city;

//make button into a variable
var searchButton = document.getElementById("searchButton");
var cityName = document.getElementById("cityName");
var cityDate = document.getElementById("cityDate");
var weatherTemp = document.getElementById("weatherTemp");
var weatherEmoji = document.getElementById("weatherEmoji");
var weatherWind = document.getElementById("weatherWind");
var weatherHum = document.getElementById("weatherHum");
var pastSearches = [];


var formEl = $('#search-form');
var listEl = $('#cities-list');


// select form element by its `name` attribute and get its value
//   var newCity = $('input[name="city-input"]').val();

function searchCity(event) {
    event.preventDefault();

    //add localStorage to the Cities-list
    var city = document.getElementById("search-input").value
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=86c03a249512cef92213348475754024";

    fetch(queryURL)
        .then(function (weatherResponse) {
            // console.log(weatherResponse)
            if (weatherResponse.ok) {
                weatherResponse.json().then(function (weatherData) {
                    // console.log(weatherData)
                    let lat = weatherData.coord.lat;
                    let lon = weatherData.coord.lon;
                    forecast(lat, lon);
                    // call history function here
                    citySearch(city)
                })
            }
        })
}
// FOCUS ON GETTING CITY NAME/DATE/TEMP/HUMIDITY/ICON/WIND SPEED
//CHANGE HTTP TO HTTPS
function forecast(lat, lon) {
    var place = "https://api.openweathermap.org/data/2.5/forecast/?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=86c03a249512cef92213348475754024";
    fetch(place)
        .then(function (newCity) {
            if (newCity.ok) {
                newCity.json().then(function (cityData) {
                    console.log(cityData)
                    let cityName = cityData.city.name
            })
            }
        })
}
function forecast(lat, lon) {
    var place = "https://api.openweathermap.org/data/2.5/forecast/?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=86c03a249512cef92213348475754024";
    fetch(place)
        .then(function (getDate) {
            if (getDate.ok) {
                getDate.json().then(function (cityData) {
                    console.log(cityData)
                    let cityDate = cityData.list.dt
            })
            }
        })
}
function forecast(lat, lon) {
    var place = "https://api.openweathermap.org/data/2.5/forecast/?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=86c03a249512cef92213348475754024";
    fetch(place)
        .then(function (getTemp) {
            if (getTemp.ok) {
                getTemp.json().then(function (cityData) {
                    console.log(cityData)
                    let weatherTemp = cityData.list.main.temp_max
            })
            }
        })
}
function forecast(lat, lon) {
    var place = "https://api.openweathermap.org/data/2.5/forecast/?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=86c03a249512cef92213348475754024";
    fetch(place)
        .then(function (getHum) {
            // console.log(newCity)
            if (getHum.ok) {
                getHum.json().then(function (cityData) {
                    console.log(cityData)
                    let weatherHum = cityData.list.main.humidity
            })
            }
        })
}
function forecast(lat, lon) {
    var place = "https://api.openweathermap.org/data/2.5/forecast/?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=86c03a249512cef92213348475754024";
    fetch(place)
        .then(function (getWind) {
            if (getWind.ok) {
                getWind.json().then(function (cityData) {
                    console.log(cityData)
                    let weatherWind = cityData.list.wind.speed
            })
            }
        })
}
function forecast(lat, lon) {
    var place = "https://api.openweathermap.org/data/2.5/forecast/?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=86c03a249512cef92213348475754024";
    fetch(place)
        .then(function (weatherIcon) {
            if (weatherIcon.ok) {
                weatherIcon.json().then(function (cityData) {
                    console.log(cityData)
                    let icon = cityData.list.weather.icon 
            })
            }
        })
} 
// local storage
                // sending info to local storage
                function citySearch(cityName){
pastSearches.push(cityName)
console.log(pastSearches)
                }
                
//add eventListener to search button 
searchButton.addEventListener("click", searchCity)
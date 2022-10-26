// ready to use w/ API key- http://api.openweathermap.org/geo/1.0/zip?zip=E14,GB&appid={86c03a249512cef92213348475754024}
//api.openweathermap.org/data/2.5/weather?q={city name}&appid={86c03a249512cef92213348475754024}
//var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + 86c03a249512cef92213348475754024;
//{lon: -117.1573, lat: 32.7153}

var cityWeather = {}
var city;

//make button into a variable
var searchButton = document.getElementById("searchButton");
var cityName = document.getElementById("cityName");


var formEl = $('#search-form');
var listEl = $('#cities-list');


  // select form element by its `name` attribute and get its value
  var newCity = $('input[name="city-input"]').val();

function searchCity(event){
    event.preventDefault();
    //add localStorage to the Cities-list
   var city = document.getElementById("search-input").value
   var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=86c03a249512cef92213348475754024";
   
fetch(queryURL).then(weatherResponse =>{
    console.log(weatherResponse)
    if(weatherResponse.ok){
        weatherResponse.json().then(weatherData =>{
            console.log(weatherData)
            cityName.textContent = weatherData.name;
        })
    }
})
}

//add eventListener to search button 
searchButton.addEventListener("click", searchCity);
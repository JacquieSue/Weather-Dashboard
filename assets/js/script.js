// ready to use w/ API key- http://api.openweathermap.org/geo/1.0/zip?zip=E14,GB&appid={86c03a249512cef92213348475754024}
//api.openweathermap.org/data/2.5/weather?q={city name}&appid={86c03a249512cef92213348475754024}
//var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + 86c03a249512cef92213348475754024;

fetch(queryURL)
var List = $('#cities-list');

var city;

//make button into a variable
var searchButton = document.getElementById("btn btn-info btn-block");

//add eventListener to search button 
searchButton.addEventListener("click", function(event){
    event.preventDefault;

    //add localStorage to the Cities-list
    var cityWeather = {}
})

var today = moment();
$('').text(today.format("MM-DD-YYYY"));
const API_KEY = "9fe41d51c1b087845b518de5bd00e6fd"

// 1. We need an event listener for the input box ('submit')
// 2. Get what they typed in, and then Fetch data from the weather API for that city
// 3. Fill out the forecast/graph

function handleFormSubmit(event) {
  //handle submit event
  event.preventDefault()
  // Get the input that they typed in
  const input = document.querySelector('#city')
  // use the .value to get the text
  const whatTheyTyped = input.value
  fetchCurrentWeather(whatTheyTyped)
  fetchFiveDayForecast(whatTheyTyped)
}

function fetchCurrentWeather(city) {
  //fetch current weather based on city
  // query parameter
  fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=' + API_KEY + '&units=imperial')
    .then((response) => response.json())
    .then((json) => displayCurrentWeather(json))
}

function displayCurrentWeather(json) {
  //render current weather data to the DOM using provided IDs and json from API
  // Update our HTML
  const tableCell = document.querySelector('#temp')
  const lowCell = document.querySelector('#low')
  const highCell = document.querySelector('#high')
  const humidityCell = document.querySelector('#humidity')
  const cloudCell = document.querySelector('#cloudCover') 
  const currentTemperature = json.main.temp
  tableCell.innerHTML = currentTemperature
  lowCell.innerHTML = 
  highCell.innerHTML = 
  humidityCell.innerHTML =
  cloudCell.innerHTML = 
}


function fetchFiveDayForecast(city) {
  //fetch five day forecast data based on city
}

function displayFiveDayForecast(json) {
  //render five day forecast data to the DOM using provided IDs and json from API
}

function createChart(json) {
  //Bonus: render temperature chart using five day forecast data and ChartJS
}

document.addEventListener('DOMContentLoaded', function() {
  //add event listener here for form submission
  document.addEventListener('submit', handleFormSubmit)
})

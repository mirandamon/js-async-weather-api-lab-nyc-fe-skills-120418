const API_KEY = "9fe41d51c1b087845b518de5bd00e6fd"

// 1. We need an event listener for the input box ('submit')
// 2. Get what they typed in, and then Fetch data from the weather API for that city
// 3. Fill out the forecast/graph

// 1. Find the element that you need

function handleFormSubmit(event) {
  //handle submit event
}

function fetchCurrentWeather(city) {
  //fetch current weather based on city
}

function displayCurrentWeather(json) {
  //render current weather data to the DOM using provided IDs and json from API
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
  document.addEventListener('submit', )
})

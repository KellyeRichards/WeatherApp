function getWeather() {
  const city = document.getElementById("city-input").value;
  const apiKey = "2058fe8c2439af433be7f01907097efd"; // Replace with your actual API key
  // Make a GET request to retrieve weather data from the API
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`)
    .then(response => response.json())
    .then(data => {
      // Access the required data from the API response
      const temperature = data.main.temp;
      const description = data.weather[0].description;

      // Display the retrieved data on the web page
      const weatherInfo = document.getElementById('weather-info');
      weatherInfo.innerHTML = `Current temperature in ${city}: ${temperature}°F. ${description}.`;
    })
    .catch(error => {
      // Handle any errors that occurred during API request
      console.log(`Error: ${error}`);
    });
}
function getWeather() {
  const apiKey = "YOUR_API_KEY";
  const city = "London";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const temperature = data.main.temp - 273.15;
      const city = data.name;
      document.getElementById("weatherData").innerText = `Температура в місті ${city} становить ${temperature.toFixed(2)} градусів Цельсія`;
    })
    .catch(error => {
      console.log("Сталася помилка під час отримання даних про погоду:", error);
    });
}

document.getElementById("weatherButton").addEventListener("click", getWeather);

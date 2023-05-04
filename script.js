// Функція, яка виконується при натисканні кнопки
function getWeather() {
  // URL запиту до API OpenWeatherMap
  const apiKey = "YOUR_API_KEY";
  const city = "London";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  // Виконуємо запит до API
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Витягуємо температуру з відповіді
      const temperature = data.main.temp - 273.15;
      // Витягуємо назву міста з відповіді
      const city = data.name;
      // Відображаємо дані на веб-сторінці
      document.getElementById("weatherData").innerText = `Температура в місті ${city} становить ${temperature.toFixed(2)} градусів Цельсія`;
    })
    .catch(error => {
      console.log("Сталася помилка під час отримання даних про погоду:", error);
    });
}

// Прив'язуємо функцію до кнопки
document.getElementById("weatherButton").addEventListener("click", getWeather);

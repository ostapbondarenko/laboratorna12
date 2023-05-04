document.getElementById('weatherButton').addEventListener('click', getWeather);

function getWeather() {
  var cityName = 'Лондон';
  var apiKey = '59d8de3e36432775b2494c3629dfb691'; 

  var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey;

  fetch(apiUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var temperature = data.main.temp;
      var humidity = data.main.humidity;
      var windSpeed = data.wind.speed;

      var weatherDataDiv = document.getElementById('weatherData');
      weatherDataDiv.innerHTML = 'Температура: ' + temperature + 'K<br>' +
                                 'Вологість: ' + humidity + '%<br>' +
                                 'Швидкість вітру: ' + windSpeed + ' м/с';
    })
    .catch(function(error) {
      console.log('Виникла помилка при отриманні даних про погоду:', error);
    });
}

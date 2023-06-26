const currentWeatherMain = document.getElementById('current-weather-main');
const currentWeatherDetail = document.getElementById('current-weather-detail');
const forecastContainer = document.getElementById('forecast-container');

const showCurrentWeatherMain = (weather) => {
  currentWeatherMain.innerHTML = `
  <h2 id="city">${weather.city}</h2>
  <div id="temp">${weather.tempF}°</div>
  <div id="condition">${weather.condition}</div>
  <div id="high-low">
    <span>H:100°</span>
    <span>L:30°</span>
  </div>
  `;
};

const showCurrentWeatherDetail = (weather) => {
  currentWeatherDetail.innerHTML = `
    <h4>Today's Details</h4>
    <div>
      <span>Feels like: ${weather.feelslikeF}</span><br>
      <span>Precipitation: ${weather.precip}"</span><br>
      <span>Humidity: ${weather.humidity}%</span><br>
      <span>Wind: ${weather.wind}mph</span><br>
      <span>Sunrise: ${weather.sunrise}</span><br>
      <span>Sunset: ${weather.sunset}</span>
    </div>
  `;
};

const showForecast = (weather) => {
  forecastContainer.innerHTML = '<h4>Forecast</h4>';
  for (let i = 1; i < 6; i += 1) {
    const forecastDiv = document.createElement('div');
    forecastDiv.classList.add('forecast-day');
    forecastContainer.appendChild(forecastDiv);
    forecastDiv.innerHTML = `
      <span>${weather.forecast.forecastday[i].date}</span>
      <span>${weather.forecast.forecastday[i].day.avgtemp_f}</span>
      <span>${weather.forecast.forecastday[i].day.condition.text}</span>
      <span>${weather.forecast.forecastday[i].day.maxtemp_f}</span>
      <span>${weather.forecast.forecastday[i].day.mintemp_f}</span>
    `;
  }
};

export { showCurrentWeatherMain, showCurrentWeatherDetail, showForecast };

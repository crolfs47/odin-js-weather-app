const currentWeatherMain = document.getElementById('current-weather-main');
const currentWeatherDetail = document.getElementById('current-weather-detail');

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
    <h3>Today's Details</h3>
    <div>
      <span>Feels like: ${weather.feelslikeF}</span><br>
      <span>Precipitation: ${weather.precip}"</span><br>
      <span>Humidity: ${weather.humidity}%</span><br>
      <span>Wind: ${weather.wind}mph</span>
    </div>
  `;
};

export { showCurrentWeatherMain, showCurrentWeatherDetail };

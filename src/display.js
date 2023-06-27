const resultsContainer = document.getElementById('results-container');

// const currentWeatherMain = document.getElementById('current-weather-main');
// const currentWeatherDetail = document.getElementById('current-weather-detail');
// const forecastContainer = document.getElementById('forecast-container');

const setupDisplay = () => {
  const weatherContainer = document.createElement('div');
  weatherContainer.setAttribute('id', 'weather-container');
  resultsContainer.appendChild(weatherContainer);

  const currentWeatherMain = document.createElement('div');
  currentWeatherMain.setAttribute('id', 'current-weather-main');
  weatherContainer.appendChild(currentWeatherMain);

  const currentWeatherDetail = document.createElement('div');
  currentWeatherDetail.setAttribute('id', 'current-weather-detail');
  weatherContainer.appendChild(currentWeatherDetail);

  const forecastContainer = document.createElement('div');
  forecastContainer.setAttribute('id', 'forecast-container');
  weatherContainer.appendChild(forecastContainer);
};

const displayCurrentWeatherMain = (weather) => {
  const currentWeatherMain = document.getElementById('current-weather-main');
  currentWeatherMain.innerHTML = `
  <h2 id="city">${weather.city}</h2>
  <img src="https:${weather.icon}">
  <div id="temp">${weather.tempF}°</div>
  <div id="condition">${weather.condition}</div>
  <div id="high-low">
    <span>H: ${weather.maxTempF}°</span>
    <span>L: ${weather.minTempF}°</span>
  </div>
  `;
};

const displayCurrentWeatherDetail = (weather) => {
  const currentWeatherDetail = document.getElementById('current-weather-detail');
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

const displayForecast = (weather) => {
  const forecastContainer = document.getElementById('forecast-container');
  forecastContainer.innerHTML = '<h4>Forecast</h4>';
  for (let i = 1; i < 6; i += 1) {
    const forecastDiv = document.createElement('div');
    forecastDiv.classList.add('forecast-day');
    forecastContainer.appendChild(forecastDiv);
    forecastDiv.innerHTML = `
      <span>${weather.forecast.forecastday[i].day.date}</span>
      <span>${weather.forecast.forecastday[i].day.avgtemp_f}</span>
      <span>${weather.forecast.forecastday[i].day.condition.text}</span>
      <span>${weather.forecast.forecastday[i].day.maxtemp_f}</span>
      <span>${weather.forecast.forecastday[i].day.mintemp_f}</span>
    `;
  }
};

export { setupDisplay, displayCurrentWeatherMain, displayCurrentWeatherDetail, displayForecast };

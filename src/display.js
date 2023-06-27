import { format } from 'date-fns';

const resultsContainer = document.getElementById('results-container');

const setupDisplay = () => {
  resultsContainer.innerHTML = '';

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
  <h2>${weather.city}</h2>
  <img src="https:${weather.icon}">
  <h3>${weather.tempF}°</h3>
  <div class="condition">${weather.condition}</div>
  <span class="high-temp">H: ${weather.maxTempF}°</span>
  <span>L: ${weather.minTempF}°</span>
  `;
};

const displayCurrentWeatherDetail = (weather) => {
  const currentWeatherDetail = document.getElementById('current-weather-detail');
  currentWeatherDetail.innerHTML = `
    <h4>Today's Details</h4>
    <div id="details-grid">
      <span>Feels like: ${weather.feelslikeF}°</span>
      <span>Precipitation: ${weather.precip}"</span>
      <span>Humidity: ${weather.humidity}%</span>
      <span>Wind: ${weather.wind} mph</span>
      <span>Sunrise: ${weather.sunrise}</span>
      <span>Sunset: ${weather.sunset}</span>
    </div>
  `;
};

const displayForecast = (weather) => {
  const forecastContainer = document.getElementById('forecast-container');
  forecastContainer.innerHTML = '<h4>5-Day Forecast</h4>';

  const forecastGrid = document.createElement('div');
  forecastGrid.setAttribute('id', 'forecast-grid');
  forecastContainer.appendChild(forecastGrid);

  for (let i = 1; i < 6; i += 1) {
    const forecastDiv = document.createElement('div');
    forecastDiv.classList.add('forecast-day');
    forecastGrid.appendChild(forecastDiv);
    forecastDiv.innerHTML = `
      <span class="bold-text">${format(new Date(weather.forecast.forecastday[i].date), 'iii')}</span>
      <span class="forecast-text">${format(new Date(weather.forecast.forecastday[i].date), 'MMM d')}</span>
      <img class="forecast-icon"src="https:${weather.forecast.forecastday[i].day.condition.icon}">
      <h3>${weather.forecast.forecastday[i].day.avgtemp_f}°</h3>
      <div class="flex-column">
        <span class="condition forecast-text">${weather.forecast.forecastday[i].day.condition.text}</span>
        <div class="flex">
          <span class="forecast-text high-temp">H: ${weather.forecast.forecastday[i].day.maxtemp_f}°</span>
          <span class="forecast-text">L: ${weather.forecast.forecastday[i].day.mintemp_f}°</span>
        </div>
      </div>
    `;
  }
};

export {
  setupDisplay, displayCurrentWeatherMain, displayCurrentWeatherDetail, displayForecast,
};

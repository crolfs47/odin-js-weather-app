// const searchForm = document.getElementById('search-form');
const currentWeatherContainer = document.getElementById('current-weather-container');

const showWeather = (weather) => {
  currentWeatherContainer.innerHTML = `
  <h2 id="city">${weather.city}</h2>
  <div id="temp">${weather.tempF}°</div>
  <div id="condition">${weather.condition}</div>
  <div id="high-low">
    <span>H:100°</span>
    <span>L:30°</span>
  </div>
  `;
};

// searchForm.addEventListener('submit', showWeather);

export { showWeather };

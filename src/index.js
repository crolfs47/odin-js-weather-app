import './style.css';
import { getWeather } from './weatherData';
import {
  setupDisplay, displayCurrentWeatherMain, displayCurrentWeatherDetail, displayForecast,
} from './display';

const searchForm = document.getElementById('search-form');

searchForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const weather = await getWeather();
  setupDisplay();
  displayCurrentWeatherMain(weather);
  displayCurrentWeatherDetail(weather);
  displayForecast(weather);
});

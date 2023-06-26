import './style.css';
import { getWeather } from './weatherData';
import { showCurrentWeatherMain, showCurrentWeatherDetail } from './display';

const searchForm = document.getElementById('search-form');

searchForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const weather = await getWeather();
  showCurrentWeatherMain(weather);
  showCurrentWeatherDetail(weather);
});

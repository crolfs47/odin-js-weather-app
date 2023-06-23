import './style.css';

console.log('Test');

const getWeather = async (city) => {
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=5cad8c98b3024bbaaf0190940232106&q=${city}`, { mode: 'cors' });
  const weatherData = await response.json();
  console.log(weatherData);
};

const getCityInput = () => {
  // e.preventDefault();
  const cityInput = 'London';
  getWeather(cityInput);
};

getCityInput();

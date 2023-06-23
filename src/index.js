import './style.css';

const getCityInput = () => {
  // e.preventDefault();
  const cityInput = 'London';
  return cityInput;
};

const getCurrentWeatherAPIData = async () => {
  const city = getCityInput();
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=5cad8c98b3024bbaaf0190940232106&q=${city}`, { mode: 'cors' });
  const weatherData = await response.json();
  return weatherData;
};

const getWeather = async () => {
  const weatherData = await getCurrentWeatherAPIData();
  const weather = {
    city: weatherData.location.name,
    tempC: weatherData.current.temp_c,
    tempF: weatherData.current.temp_f,
    condition: weatherData.current.condition.text,
  };
  console.log(weather.tempF);
  return weather;
};

getWeather();

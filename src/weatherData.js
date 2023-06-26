const searchForm = document.getElementById('search-form');

const getCityInput = () => {
  const cityInput = document.getElementById('city-input').value;
  return cityInput;
};

const getCurrentWeatherAPIData = async () => {
  try {
    const city = getCityInput();
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=5cad8c98b3024bbaaf0190940232106&q=${city}`, { mode: 'cors' });
    const weatherData = await response.json();
    return weatherData;
  } catch (error) {
    console.log(`error: ${error}`);
  }
};

const getWeather = async (e) => {
  e.preventDefault();
  try {
    const weatherData = await getCurrentWeatherAPIData();
    const weather = {
      city: weatherData.location.name,
      tempC: weatherData.current.temp_c,
      tempF: weatherData.current.temp_f,
      condition: weatherData.current.condition.text,
    };
    console.log(weather);
    return weather;
  } catch (error) {
    console.log(`error: ${error}`);
  }
};

searchForm.addEventListener('submit', getWeather);

export { getWeather };

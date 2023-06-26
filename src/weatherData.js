const getCityInput = () => {
  const cityInput = document.getElementById('city-input').value;
  return cityInput;
};

const getCurrentWeatherAPIData = async () => {
  try {
    const city = getCityInput();
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=5cad8c98b3024bbaaf0190940232106&q=${city}&days=6`, { mode: 'cors' });
    const weatherData = await response.json();
    return weatherData;
  } catch (error) {
    console.log(`error: ${error}`);
  }
};

const getWeather = async () => {
  try {
    const weatherData = await getCurrentWeatherAPIData();
    const weather = {
      city: weatherData.location.name,
      tempC: weatherData.current.temp_c,
      tempF: weatherData.current.temp_f,
      condition: weatherData.current.condition.text,
      feelslikeC: weatherData.current.feelslike_c,
      feelslikeF: weatherData.current.feelslike_f,
      wind: weatherData.current.wind_mph,
      humidity: weatherData.current.humidity,
      precip: weatherData.current.precip_in,
      sunrise: weatherData.forecast.forecastday[0].astro.sunrise,
      sunset: weatherData.forecast.forecastday[0].astro.sunset,
      forecast: weatherData.forecast,
    };
    return weather;
  } catch (error) {
    console.log(`error: ${error}`);
  }
};

export { getWeather };

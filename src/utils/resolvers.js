import {
  fetchWeatherData,
  getHistoricalWeatherData,
} from "../services/weather.service.js";
import Weather from "../models/weather.js";

export const resolvers = {
  getCurrentWeather: async ({ city }) => {
    const weather = await fetchWeatherData(city);
    const newWeather = new Weather(weather);
    await newWeather.save();
    return weather;
  },

  getHistoricalWeather: async ({ city, from, to }) => {
    return getHistoricalWeatherData(city, from, to);
  },
};

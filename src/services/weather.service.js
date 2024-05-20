import axios from "axios";
import Weather from "../models/weather.js";

export const fetchWeatherData = async (city) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=metric`
    );
    const { main, weather } = response.data;
    return {
      city,
      date: new Date(),
      temperature: main.temp,
      description: weather[0].description,
      icon: weather[0].icon,
    };
  } catch (error) {
    throw new Error(error);
  }
};

export const getHistoricalWeatherData = async (city, from, to) => {
  try {
    let fromDate = new Date(from);
    let toDate = new Date(to);

    fromDate.setHours(0, 0, 0, 0);
    toDate.setHours(23, 59, 59, 999);

    const diffInDays = Math.abs((toDate - fromDate) / (1000 * 60 * 60 * 24));

    if (diffInDays > 30) {
      throw new Error("Maximum date range allowed is 30 days");
    }

    const data = await Weather.find({
      city,
      date: { $gte: fromDate, $lte: toDate },
    });

    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

# Weather-App_Server

## Description

The Weather App Backend is a Node.js application that provides APIs to fetch current weather data and historical weather data for various cities around the world. It serves as the backend for the Weather App project.

## Technologies Used

1.Node.js
2.Express.js
3.GraphQL
4.MongoDB

## Installation

1.Clone the repository:
git clone https://github.com/athuls11/Weather-App_Server.git
2.Navigate to the project directory:
cd <project directory path>
3.Install dependencies:
npm install
4.Set up environment variables:
a.Create a .env file in the root directory.
b.Add the following environment variables:
PORT=5000
MONGO_DB_URI=mongodb+srv://athuls180:Ilnon1Cm5RPGmakz@cluster0.xhhbdyt.mongodb.net/weatherApp?retryWrites=true&w=majority&appName=Cluster0
WEATHER_API_KEY=f174bcaa8a00444b7dfae3a62c20e3e4
5.Run the server:
npm start

## GraphQL Schema

Access GraphiQL by open your web browser and navigate to http://localhost:5000/graphql

The GraphQL schema defines two query fields:

1. getCurrentWeather
   Description: Fetches current weather data for the specified city.
   Arguments:
   city (required): Name of the city for which to fetch the current weather data.
   Returns: Weather object containing current weather data.
   sample query to run in the GraphQL:
   query {
   getCurrentWeather(city: "Delhi") {
   city
   date
   temperature
   description
   icon
   }
   }

2. getHistoricalWeather
   Description: Fetches historical weather data for the specified city within the specified date range.
   Arguments:
   city: Name of the city for which to fetch historical weather data.
   from: Start date of the date range in the format "YYYY-MM-DD".
   to: End date of the date range in the format "YYYY-MM-DD".
   Returns: Array of Weather objects containing historical weather data.
   sample query to run in the GraphQL:
   query {
   getHistoricalWeather(city: "Delhi", from: "2024-05-19", to: "2023-05-25") {
   city
   date
   temperature
   description
   icon
   }
   }

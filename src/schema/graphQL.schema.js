import { buildSchema } from "graphql";
import { resolvers } from "../utils/resolvers.js";

export const schema = buildSchema(`
  type Query {
    getCurrentWeather(city: String!): Weather
    getHistoricalWeather(city: String!, from: String!, to: String!): [Weather]
  }

  type Weather {
    city: String
    date: String
    temperature: Float
    description: String
    icon: String
  }
`);

export const rootValue = {
  getCurrentWeather: async (args) => {
    try {
      return await resolvers.getCurrentWeather(args);
    } catch (error) {
      return new Error(error.message);
    }
  },
  getHistoricalWeather: async (args) => {
    try {
      return await resolvers.getHistoricalWeather(args);
    } catch (error) {
      return new Error(error.message);
    }
  },
};

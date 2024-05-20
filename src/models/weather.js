import mongoose from "mongoose";

const { Schema } = mongoose;

const WeatherSchema = new Schema({
  city: String,
  date: { type: Date, default: Date.now },
  temperature: Number,
  description: String,
  icon: String,
});

export default mongoose.model("Weather", WeatherSchema);

const mongoose = require("mongoose");

const covidSchema = new mongoose.Schema({
  isoCode: {
    type: String,
  },
  continent: {
    type: String,
  },
  country: {
    type: String,
  },
  date: {
    type: String,
  },
  totalDeaths: {
    type: Number,
  },
  newDeaths: {
    type: Number,
  },
  population: {
    type: Number,
  },
  medianAge: {
    type: Number,
  },
});

module.exports = mongoose.model("CovidDeaths", covidSchema);

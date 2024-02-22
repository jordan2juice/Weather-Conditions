"use strict";

// This "weather" class has the parameters of temperature, precipitation & description.
class Weather {
  constructor(temperature, precipitation, description) {
    this.temp = temperature;
    this.precip = precipitation;
    this.desc = description;
  }

  changeTemp(temp) {
    this.temp = temp + "°F";
  }

  changePrecip(precip) {
    this.precip += "% chance of rain";
  }

  changeDesc(desc) {
    this.desc = desc;
  }
  displayInfo() {
    console.log(`Weather: ${this.temp}, ${this.precip}, ${this.desc}`);
  }
}

class DayWeather extends Weather {
  constructor(temperature, precipitation, description, weekday, info) {
    super(temperature, precipitation, description);
    this.day = weekday;
    this.info = info;
  }
  displayInfo() {
    console.log(
      `Day Weather: ${this.temp}, ${this.day}, ${this.desc}, ${this.info}, ${this.precip}] `
    );
  }
}

const weather1 = new Weather(80, 0, "Sunny");
const weather2 = new Weather(90, 10, "Cloudy");

const dayWeather1 = new DayWeather(
  80,
  0,
  "Sunny",
  "It is sunny today",
  "Monday"
);
const dayWeather2 = new DayWeather(
  90,
  10,
  "Cloudy",
  "It is cloud today",
  "Tuesday"
);

weather1.displayInfo();
weather2.displayInfo();
dayWeather1.displayInfo();
dayWeather2.displayInfo();

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
  constructor(temperature, precipitation, description) {
    super(temperature, precipitation, description);
    this.alert = weatherAlert;
    this.day = weekday;
  }
  displayInfo() {
    console.log(
      `Weather: ${this.temp}, ${this.precip}, ${this.desc}, ${this.alert}, ${this.day}`
    );
  }
}

const weather1 = new Weather(80, 0, "Sunny");
const weather2 = new Weather(90, 10, "Cloudy");



weather1.displayInfo();
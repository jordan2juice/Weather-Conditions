# Weather-Conditions

## Weather Conditions

The first condition of the weather in the script gives me the weather conditions for a specific weather with the variables stated in the script.

```javascript
class Weather {
  constructor(temperature, precipitation, description) {
    this.temp = temperature; //temperature in Fahrenheit
    this.precip = precipitation; //precip in percentage
    this.desc = description; // description of the weather
  }

  changeTemp(temp) {
    this.temp = temp + "°F"; // convert temperature to degrees Fahrenheit if needed.
  }

  changePrecip(precip) {
    this.precip += "% chance of rain"; // convert precipitation to percent.
  }

  changeDesc(desc) {
    this.desc = desc; // set new weather description.
  }
  displayInfo() {
    console.log(`Weather: ${this.temp}, ${this.precip}, ${this.desc}`);
  }
}
```

## New Weather Day

The script below creates a new instance of `Weather` and calls its methods to demonstrate how it works.

```javascript
class DayWeather extends Weather {
  constructor(temperature, precipitation, description, weekday, info) {
    super(temperature, precipitation, description); // calls the conditions from above.
    this.day = weekday; // sets a new  property for day of the week.
    this.info = info; // sets a new  property for additional information about the day.
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
  "It is sunny today", // the info
  "Monday" // the weekday
);
const dayWeather2 = new DayWeather(
  90,
  10,
  "Cloudy",
  "It is cloud today", // the info
  "Tuesday" // the weekday.
);
```

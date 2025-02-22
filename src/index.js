import "./styles.css";
import weather from "./weather"

console.log("Hello World!")

const forecast = await weather.getForecast("london", 3)

console.log(forecast);

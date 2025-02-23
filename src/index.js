import "./styles.css";
import weather from "./weather.js";
import dom from "./dom.js";

const container = document.querySelector("body");

const forecast = await weather.getForecast("london", 3, "metric")
console.log(forecast[0]);
dom.createCard(forecast[0], container);


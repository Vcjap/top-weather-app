import "./styles.css";
import weather from "./weather.js";
import dom from "./dom.js";

const container = document.querySelector("body");

const forecast = await weather.getForecast("london", 3, "metric")

forecast.forEach(day => {
    dom.createCard(day, container)
});
// dom.createCard(forecast[0], container);


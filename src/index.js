import "./styles.css";
import weather from "./weather.js";
import dom from "./dom.js";


const forecast = await weather.getForecast("london", 3, "metric")

dom.refreshDisplay(forecast)
// dom.createCard(forecast[0], container);
const searchLocation = () => {

}

import "./styles.css";
import weather from "./weather.js";
import dom from "./dom.js";

let forecastSystem = "metric";

const searchLocationBtn = document.getElementById("search_location");
searchLocationBtn.addEventListener("click", async (event) => showForecast(event, forecastSystem));

const celsiusBtn = document.getElementById("metric");
celsiusBtn.addEventListener("click", async (event) => showForecast(event, event.target.id));

const fahrenheitBtn = document.getElementById("us")
fahrenheitBtn.addEventListener("click", async (event) => showForecast(event, event.target.id));

const showForecast = async (event, newForecastSystem) => {
    event.preventDefault();
    dom.refreshDisplay([{}]); // Show the loader while we fetch data

    try {
        const queryInput = document.getElementById("query");
        const location = queryInput.value;
        forecastSystem = newForecastSystem; // Used to keep or change celsius/fahrenheit, depending on the button clicked
        const forecast = await weather.getForecast(location, 3, forecastSystem);
        dom.refreshDisplay(forecast);
    } catch {
        const container = document.getElementById("forecast_container");
        container.innerHTML = "";
        container.textContent = "Location not found. Try another one!";
    }
}
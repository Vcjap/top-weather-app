import "./styles.css";
import weather from "./weather.js";
import dom from "./dom.js";



const searchLocationBtn = document.getElementById("search_location");
searchLocationBtn.addEventListener("click", async (event) => {
    event.preventDefault();
    const queryInput = document.getElementById("query");
    const location = queryInput.value;
    const forecast = await weather.getForecast(location, 3, "metric")
    dom.refreshDisplay(forecast)
})

const celsiusBtn = document.getElementById("metric");
celsiusBtn.addEventListener("click", async (event) => {
    event.preventDefault();
    const queryInput = document.getElementById("query");
    const location = queryInput.value;
    const forecast = await weather.getForecast(location, 3, event.target.id)
    dom.refreshDisplay(forecast)
});

const fahrenheitBtn = document.getElementById("us")
fahrenheitBtn.addEventListener("click", async (event) => {
    event.preventDefault();
    const queryInput = document.getElementById("query");
    const location = queryInput.value;
    const forecast = await weather.getForecast(location, 3, event.target.id)
    dom.refreshDisplay(forecast)
});
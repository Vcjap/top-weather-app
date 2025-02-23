const showLoader = (container) => {
    const loaderContainer = document.createElement("div");
    loaderContainer.classList.add("loader");
    loaderContainer.textContent = "Loading data...";
    container.append(loaderContainer);
}

const populateCard = (dayData, card) => {
    for (const [key,value] of Object.entries(dayData)) { // Object.entries returns each key and value
        const propertyContainer = document.createElement("div");
        propertyContainer.classList.add(`${key}`);
        propertyContainer.textContent = `${key}: ${value}`;
        card.append(propertyContainer);
    }
    return card;    
}

const createCard = (dayData, container) => {
    let card = document.createElement("div");
    card.classList.add("card");
    if (Object.keys(dayData).length === 0) {
        showLoader(card);
    } else {
        card = populateCard(dayData, card);
    }

    container.append(card);
}

const refreshDisplay = (forecast) => {
    const container = document.getElementById("forecast_container");
    container.innerHTML = "";
    forecast.forEach(day => {
        createCard(day, container)
    });
}

const toggleSystemBtn = (oldForecastSystem, newForecastSystem) => {
    if (oldForecastSystem !== newForecastSystem) {
        console.log(`Old system: ${oldForecastSystem}, New system: ${newForecastSystem}`);
        const oldSystemBtn = document.getElementById(`${oldForecastSystem}`);
        const newSystemBtn = document.getElementById(`${newForecastSystem}`);
        oldSystemBtn.classList.toggle("system_current");
        newSystemBtn.classList.toggle("system_current");
    }
}

export default {refreshDisplay, toggleSystemBtn}
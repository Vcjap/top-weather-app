const createCard = (dayData, container) => {
    const card = document.createElement("div");

    for (const [key,value] of Object.entries(dayData)) { // Object.entries returns each key and value
        const propertyContainer = document.createElement("div");
        propertyContainer.classList.add(`${key}`);
        propertyContainer.textContent = `${key}: ${value}`;
        card.append(propertyContainer);
    }
    container.append(card);
}

export default {createCard}
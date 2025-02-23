
const getData = async (location, unitGroup) => {
    const apiKey = "3LSNWAWR7J3Z5NMVK7E5KZ7T2";
    try {
        const locationData = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}&unitGroup=${unitGroup}&contentType=json`, {
            "method": "GET",
            "headers": {
            }
            })
        const locationDataUnpacked = await locationData.json();
        return locationDataUnpacked;
    } catch (error) {
        console.log(error)
    }
}

const getDayData = (day) => {
    const dayData = {
        datetime: day.datetime,
        conditions: day.conditions,
        temp: day.temp,
        feelslike: day.feelslike,
        tempmax: day.tempmax,
        tempmin: day.tempmin,
        description: day.description
    }
    return dayData
}

const getForecast = async (location, daysToForecast = 2, unitGroup = "metric") => {
        const newData = await getData(location, unitGroup);
        const selectedDays = await newData.days.slice(0,daysToForecast);
        console.log(selectedDays);
        const daysWithData = selectedDays.map(getDayData)
        return daysWithData
}

export default {getForecast}
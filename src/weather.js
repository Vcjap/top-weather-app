
const getData = async (location) => {
    const apiKey = "3LSNWAWR7J3Z5NMVK7E5KZ7T2";

    try {
        const locationData = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}&contentType=json`, {
            "method": "GET",
            "headers": {
            }
            })
        console.log(locationData);
    } catch (error) {
        console.log(error)
    }
}

export default {getData}
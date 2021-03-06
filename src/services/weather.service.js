
const key = 'tUOZ2fSWtVFdCCh9zWMZkJ1UiFPNVaci'

export const weatherService = {
    getCity,
    getWeather,
    makeId,
}

async function getWeather(id) {
    const base = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/`
    const query = `${id}?apikey=${key}`
    const res = await fetch(base + query)
    const data = await res.json()
    return data
}



async function getCity(city = "TelAviv") {
    try {
        const base = 'https://dataservice.accuweather.com/locations/v1/cities/search'
        const query = `?apikey=${key}&q=${city}`
        const data = await fetch(base + query)
        const res = await data.json()
        const currWeather = await getWeather(res[0].Key)
        const id = makeId(5)
        const cityWeather =
        {
            _id: id,
            weather: currWeather,
            city: res[0]
        }
        return cityWeather
    } catch (err) {
        console.log(err);
    }
}





function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}





const axios = require("axios");
const BASE_URL = `api.openweathermap.org/data/2.5/`
const config = require('../config.json')

async function getCity(element, index, array) {
    console.log(element)
    const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${element}&appid=${config.token}`)
    let temperatura = res.data.main.temp - 273.15
    // resultado.push(temperatura)
    return temperatura
}


exports.Callapi = async (cidades) => {
    try {
        console.log(cidades.forEach(getCity))
        return 'resultado'
    } catch (error) {
        console.log("weather" + error)
}
}

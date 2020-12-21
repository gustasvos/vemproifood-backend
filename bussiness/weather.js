const axios = require("axios");
const BASE_URL = `api.openweathermap.org/data/2.5/`
const config = require('../config.json')

exports.Callapi = async (cidades) => {
    try {
        let resultado = []

        for (cidade in cidades) {
            const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${config.token}`)
            let temperatura = res.data.main.temp - 273.15
            resultado.push(temperatura)
        }
        return resultado
    } catch (error) {
        console.log("weather" + error)
}
}

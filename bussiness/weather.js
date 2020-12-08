const axios = require("axios");
const BASE_URL = `api.openweathermap.org/data/2.5/`
const config = require('../config.json')

exports.Callapi = async () => {
    const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Manaus&appid=${config.token}`)
    let temperatura = res.data.main.temp - 273.15
    console.log(temperatura)
    return res
}
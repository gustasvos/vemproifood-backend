const axios = require("axios");
const BASE_URL = `api.openweathermap.org/data/2.5/`

exports.Callapi = async () => {
    const res = await axios.get('http://api.openweathermap.org/data/2.5/weather?q=Manaus&appid=31564d7dd7a0400420d2835f72899a1d')
    let temperatura = res.data.main.temp - 273.15
    console.log(temperatura)
    return res
}


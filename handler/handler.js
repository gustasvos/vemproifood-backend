// const asyncApiCall = require('../bussiness/weather')
const weather = require('../bussiness/weather')

exports.calcular = async(cidade) => {
    try {
        let tempo = await weather.Callapi(cidade)
        return JSON.stringify(tempo)
    } catch (error) {
        console.log("handler" + error)
    }
}

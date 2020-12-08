// const asyncApiCall = require('../bussiness/weather')
const weather = require('../bussiness/weather')

exports.funcao = async() => {
    let tempo = await JSON.stringify(weather.Callapi())
    return tempo
}

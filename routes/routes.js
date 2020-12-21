const express = require('express')
const app = express()
const recebeTemp = require('../handler/handler')
const bodyParser = require('body-parser');


app.use(bodyParser.json());

app.post('/teste', async(request, response, next) => {
    const { cidade } = request.body
    // console.log(cidade)
    let a = await recebeTemp.calcular(cidade)
    response.send(a)
})
 
app.listen(3000)


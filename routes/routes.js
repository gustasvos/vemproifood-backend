const express = require('express')
const app = express()
const teste = require('../handler/handler')
 
app.get('/teste', async(req, res) => {
    let a = teste.funcao()
    res.send(a)
})
 
app.listen(3000)

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('teste')
})

app.get('/texugo', function (req, res) {
    console.log(req);
    res.send('estou na rota "texugo"')
  })

app.listen(3000)
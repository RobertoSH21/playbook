const express = require('express')
const app = express()
const port = 3000


app.get('/',(req, rest) => {
    rest.send("Hola a todos")
})


app.listen(port, () => {
    console.log("server listo!")
})
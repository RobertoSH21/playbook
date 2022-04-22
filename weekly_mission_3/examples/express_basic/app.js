const express = require('express')
const app = express()
const port = 3000


app.get('/',(req, rest) => {
    rest.send("Hola a todos")
})


app.listen(port, () => {
    console.log("server listo!")
})

app.get('/launchx',(req, rest) => {
    rest.send("Bienvenidos a launchX")
})

app.get('/node',(req, rest) => {
    const explorer1 = {id: 1, name: "Explorer1"}
    const explorer2 = {id: 2, name: "Explorer2"}
    const explorer3 = {id: 3, name: "Explorer3"}
    rest.send(explorer1, explorer2, explorer3)
})
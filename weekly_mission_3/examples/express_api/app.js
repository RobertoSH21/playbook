const express = require('express')

const app = express()
app.use(express.json())

const port = 3000

app.get('./v1/explorers', (req, res) => {
    console.log('GET Explorers V1 API ${new Date()}')
    const explorer1 = {id: 1, name: "Explorer1"}
    const explorer2 = {id: 2, name: "Explorer2"}
    const explorers = [explorer1, explorer2]
    res.status(200).json(explorers)
})

app.get('./v1/explorers/:id', (req, res) => {
    console.log('GET Explorers V1 API ${new Date()}')
    const explorer1 = {id: 1, name: "Explorer1"}
    res.status(200).json(explorers)
})

app.post('v1/explorers', (req, res) => {
    console.log('GET Explorers V1 API ${new Date()}')

    console.log(req.body)
    res.status(201).json({message: "creando exitosamente"})
})

app.listen(port, () => {
    console.log('Example app listening on port ${port]}')
})
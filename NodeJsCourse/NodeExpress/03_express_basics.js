const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.status(200).send('Hola Iker')
})

app.get('/about', (req, res) => {
    res.status(200).send('About page')
})

app.all('*', (req, res) => {
    res.status(404).send('Page not found!!')
})

app.listen(5000, () => {
    console.log('Here I am');
})
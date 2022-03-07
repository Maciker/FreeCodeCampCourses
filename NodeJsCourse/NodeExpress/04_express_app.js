const express = require('express')
const path = require('path')

const app = express()

app.use(express.static('./navbar-app'))

// using sendFile
// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// })

// adding to static assets. Adding the index html to the file folder.

// Server side rendering with templates

app.all('*', (req, res) => {
    res.status(404).send('Page not found!!')
})

app.listen(5000, (req, res) => {
    console.log('Server listening on port 5000...');
})
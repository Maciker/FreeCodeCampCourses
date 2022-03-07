const express = require('express')

const app = express()

const {products} = require('./data')

app.get('/', (req, res) => {
    res.status(200).send('<h1>HomePage</h1><a href="api/products">products</a>')
})

app.get('/api/products', (req, res) => {
    const filteredProducts = products.map((product) => {
        const {id, name, image } = product
        return {id, name, image}
    })
    res.json(filteredProducts)
})

app.get('/api/products/:productID', (req, res) => {
    const { productID } = req.params
    const singleProduct = products.find((product) => product.id === Number(productID))
    if (!singleProduct) {
        return res.status(404).send('Product not found')
    }
    res.json(singleProduct)
})


app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params);
    res.send('Hello from reviews')
})

app.listen(5000, () => {
    console.log('Server listening on port 5000...');
})
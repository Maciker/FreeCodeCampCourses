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


app.get('/api/v1/query', (req, res) => {
    const {search, limit} = req.query
    let sortedProducts = [...products]

    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }

    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }

    if (sortedProducts.length < 1) {
        // res.status(200).send('No Products matched with your search')
        return res.status(200).json({success: true, data: []})
    }

    res.status(200).json(sortedProducts)
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params);
    res.send('Hello from reviews')
})

app.listen(5000, () => {
    console.log('Server listening on port 5000...');
})
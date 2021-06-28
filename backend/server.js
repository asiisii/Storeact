const express = require('express')
const products = require('./data/products')
const app = express()

app.get('/', (req, res) => {
	res.send('API is running...')
})

//will give us the entire products
app.get('/v1/products', (req, res) => {
	// we could do res.json but its a json file so
	res.json(products)
})

//this will give us the single product
app.get('/v1/products/:id', (req, res) => {
  // finds and returns products that matches the id 
	const product = products.find(product => product._id === req.params.id)
	res.json(product)
})

app.listen(5000, console.log('Server running on port 5000'))

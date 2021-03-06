import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'
// import products from './data/products.js'
import productRoutes from './routes/productRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
	res.send('API is running...')
})

// //will give us the entire products
// app.get('/v1/products', (req, res) => {
// 	// we could do res.json but its a json file so
// 	res.json(products)
// })

// //this will give us the single product
// app.get('/v1/products/:id', (req, res) => {
// 	// finds and returns products that matches the id
// 	const product = products.find(product => product._id === req.params.id)
// 	res.json(product)
// })

app.use('/v1/products', productRoutes)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
	)
)

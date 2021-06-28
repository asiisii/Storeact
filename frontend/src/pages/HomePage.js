import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'
// import products from '../products'

const HomePage = () => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		const fetchProducts = async () => {
			const { data } = await axios.get('/v1/products')
			setProducts(data)
		}
		fetchProducts()
	}, [])

	return (
		<>
			<h1>Latest Products</h1>
			<Row>
				{products.map(product => (
					// small, medium, large, ex-l
					<Col sm={12} md={6} lg={4} ex={3} key={product._id}>
						<Product product={product} />
					</Col>
				))}
			</Row>
		</>
	)
}

export default HomePage

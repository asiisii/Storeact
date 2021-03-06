import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'
// import products from '../products'

const ProductPage = ({ match }) => {
	const [product, setProduct] = useState([])

	useEffect(() => {
		const fetchProduct = async () => {
			const { data } = await axios.get(`/v1/products/${match.params.id}`)
			setProduct(data)
		}
		fetchProduct()
	}, [match])

	return (
		<>
			<Link className='btn my-3' to='/'>
				Go Back
			</Link>
			<Row>
				<Col md={6}>
					{/* fluid will keep the image inside its container */}
					<Image src={product.image} alt={product.name} fluid></Image>
				</Col>
				<Col md={3}>
					{/* variant=flush takes away the border */}
					<ListGroup variant='flush'>
						<ListGroup.Item>
							<h3>{product.name}</h3>
						</ListGroup.Item>
						<ListGroup.Item>
							<Rating
								value={product.rating}
								text={`${product.numReviews} reviews`}
							/>
						</ListGroup.Item>
						<ListGroup.Item>Price: ${product.price}</ListGroup.Item>
						<ListGroup.Item>Description: {product.description}</ListGroup.Item>
					</ListGroup>
				</Col>
				<Col md={3}>
					<Card>
						<ListGroup variant='flush'>
							<ListGroup.Item>
								<Row>
									<Col>Price:</Col>
									<Col>
										<strong>${product.price}</strong>
									</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>Status:</Col>
									<Col>
										{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
									</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Button
									className='cart-button'
									type='button'
									disabled={product.countInStock === 0}
								>
									Add to Cart
								</Button>
							</ListGroup.Item>
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default ProductPage

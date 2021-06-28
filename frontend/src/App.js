import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'

const App = () => {
	return (
		<Router>
			<Header />
			<main className='py-3'>
				<Container>
          <Route exact path='/' component={HomePage} />
				</Container>
			</main>
			<Footer />
		</Router>
	)
}

export default App

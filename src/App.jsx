import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import Cart from './components/Cart'
import Error from './components/Error'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

const routes = [
	'/',
	'/pizza-plus',
	'/tanuki',
	'/food-band',
	'/palki-skalki',
	'/gusi-lebedi',
	'/pizza-burger',
]

function App() {
	const { pathname } = useLocation()
	const isOpen = useSelector(({ toggleCartReducer }) => toggleCartReducer.openCart)

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}
	}, [isOpen])

	return (
		<>
			{!routes.includes(pathname) ? (
				<Error />
			) : (
				<>
					<Header />
					<Main />
					<Footer />
					{isOpen && <Cart />}
				</>
			)}
		</>
	)
}

export default App

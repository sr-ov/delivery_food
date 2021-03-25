import React from 'react'
import './preloader.css'

function Preloader() {
	return (
		<div className="overlay-loader">
			<img src="/img/pizza.svg" alt="pizza" className="loader" />
		</div>
	)
}

export default Preloader

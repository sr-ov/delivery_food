import React from 'react'
import { Link } from 'react-router-dom'

function CardsItem({ image, kitchen, name, price, products, stars, timeOfDelivery }) {
	return (
		<Link to={`/${products.replace('.json', '')}`} className="card card-restaurant">
			<img src={image} alt="imag" className="card-image" />
			<div className="card-text">
				<div className="card-heading">
					<h3 className="card-title">{name}</h3>
					<span className="card-tag tag">{timeOfDelivery}</span>
				</div>
				<div className="card-info">
					<div className="rating">{stars}</div>
					<div className="price">От {price} ₽</div>
					<div className="category">{kitchen}</div>
				</div>
			</div>
		</Link>
	)
}

export default React.memo(CardsItem)

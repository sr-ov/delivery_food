import React from 'react'

function Header({ stars, price, name }) {
	return (
		<div className="section-heading">
			<h2 className="section-title restaurant-title">{name}</h2>
			<div className="card-info">
				<div className="rating">{stars}</div>
				<div className="price">От {price} ₽</div>
			</div>
		</div>
	)
}

export default React.memo(Header)

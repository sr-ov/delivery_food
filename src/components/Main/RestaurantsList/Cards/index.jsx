import React from 'react'
import CardsItem from '../CardsItem'

function Cards({ data }) {
	return (
		<div className="cards cards-restaurants">
			{data.map((rest) => (
				<CardsItem key={rest.price} {...rest} />
			))}
		</div>
	)
}

export default React.memo(Cards)

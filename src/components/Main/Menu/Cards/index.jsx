import React from 'react'
import CardsItem from '../CardsItem'

function Cards({ data = [] }) {
	return (
		<div className="cards cards-menu">
			{data.map((menuItem) => (
				<CardsItem key={menuItem.id} {...menuItem} />
			))}
		</div>
	)
}

export default React.memo(Cards)

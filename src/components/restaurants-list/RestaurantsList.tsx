import { memo } from 'react'

import { RestaurantsListItem } from '..'
import { IRestaurantsItem } from '../../types'

interface CardsProps {
	data: IRestaurantsItem[]
}

function Cards({ data }: CardsProps) {
	return (
		<div className="cards cards-restaurants">
			{data.map((restaurant) => (
				<RestaurantsListItem key={restaurant.name} {...restaurant} />
			))}
		</div>
	)
}

export default memo(Cards)

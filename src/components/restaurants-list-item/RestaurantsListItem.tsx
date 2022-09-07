import { memo } from 'react'
import Link from 'next/link'

import { IRestaurantsItem } from '../../types'
import { removeExtJson } from '../../utils'

interface RestaurantsListItemProps extends IRestaurantsItem {}

function RestaurantsListItem({
	image,
	kitchen,
	name,
	price,
	products,
	stars,
	timeOfDelivery,
}: RestaurantsListItemProps) {
	return (
		<Link href={`/${removeExtJson(products)}`}>
			<a className="card card-restaurant">
				<img className="card-image" src={image} alt="картинка продукта" />

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
			</a>
		</Link>
	)
}

export default memo(RestaurantsListItem)

import { memo } from 'react'
import { IHeaderInfo } from '../../types'

interface MenuHeaderProps extends IHeaderInfo {}

function MenuHeader({ stars, price, name }: MenuHeaderProps) {
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

export default memo(MenuHeader)

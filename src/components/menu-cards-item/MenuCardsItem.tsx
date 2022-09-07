import { memo, useCallback } from 'react'

import { Button } from '..'
import { useActions, useAppSelector } from '../../hooks'
import { countItemsSelector } from '../../store/cart/selectors'
import { IMenu } from '../../types'

interface MenuCardsItemProps extends IMenu {}

function MenuCardsItem({ description, id, image, name, price }: MenuCardsItemProps) {
	const { addToCart } = useActions()
	const count = useAppSelector(countItemsSelector(id))

	const onAddToCart = useCallback(() => {
		addToCart({ price, id, name })
	}, [price, id, name, addToCart])

	return (
		<div className="card">
			<img className="card-image" src={image} alt="картинка блюда" />
			<div className="card-text">
				<div className="card-heading">
					<h3 className="card-title card-title-reg">{name}</h3>
				</div>
				<div className="card-info">
					<div className="ingredients">{description}</div>
				</div>
				<div className="card-buttons">
					<Button className="button-primary" onClick={onAddToCart}>
						{count > 0 && count}
					</Button>
					<strong className="card-price card-price-bold">{price} ₽</strong>
				</div>
			</div>
		</div>
	)
}

export default memo(MenuCardsItem)

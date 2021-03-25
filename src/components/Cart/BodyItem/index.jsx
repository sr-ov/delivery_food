import React from 'react'
import { decCountAction, incCountAction } from '../../../store/reducers/cartReducers/cart'
import Button from '../../Button'

function BodyItem({ id, price, name, count, changeCount }) {
	return (
		<div className="food-row">
			<span className="food-name">{name}</span>
			<strong className="food-price">{price} ₽</strong>
			<div className="food-counter">
				<Button
					onClickFn={() => changeCount(decCountAction, id)}
					classNames="counter-button minus"
				/>
				<span className="counter">{count}</span>
				<Button
					onClickFn={() => changeCount(incCountAction, id)}
					classNames="counter-button plus"
				/>
			</div>
		</div>
	)
}

export default React.memo(BodyItem)

import { memo, useCallback } from 'react'

import { PlusMinusCounter } from '..'
import { useActions } from '../../hooks'
import { CartItemData } from '../../store/cart/types'

interface CartBodyItemProps extends CartItemData {}

function CartBodyItem({ id, price, name, count }: CartBodyItemProps) {
	const { plusItem, minusItem } = useActions()

	const onPlusItem = useCallback(() => {
		plusItem({ id, price, name })
	}, [id, price, name, plusItem])

	const onMinusItem = useCallback(() => {
		minusItem({ id, price, name })
	}, [id, price, name, minusItem])

	return (
		<div className="food-row">
			<span className="food-name">{name}</span>
			<strong className="food-price">{price} ₽</strong>
			<PlusMinusCounter
				count={count}
				onMinus={onMinusItem}
				onPlus={onPlusItem}
				minValue={0}
			/>
		</div>
	)
}

export default memo(CartBodyItem)

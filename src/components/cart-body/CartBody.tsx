import { memo } from 'react'

import { CartBodyItem } from '..'
import { CartItemData } from '../../store/cart/types'

interface CartBodyProps {
	cartItems: CartItemData[]
}

function CartBody({ cartItems }: CartBodyProps) {
	return (
		<div className="modal-body">
			{cartItems.map((item) => (
				<CartBodyItem key={item.id} {...item} />
			))}
		</div>
	)
}

export default memo(CartBody)

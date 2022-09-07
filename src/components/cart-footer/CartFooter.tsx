import { memo } from 'react'

import { Button } from '..'

interface CartFooterProps {
	onClearCart: VoidFunction
	totalPrice: number
}

function CartFooter({ onClearCart, totalPrice }: CartFooterProps) {
	return (
		<div className="modal-footer">
			<span className="modal-pricetag">{totalPrice} ₽</span>
			<div className="footer-buttons">
				<Button onClick={onClearCart}>Очистить корзину</Button>
			</div>
		</div>
	)
}

export default memo(CartFooter)

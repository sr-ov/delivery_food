import React from 'react'
import Button from '../../Button'

function Footer({ clearCart, totalPrice }) {
	return (
		<div className="modal-footer">
			<span className="modal-pricetag">{totalPrice} ₽</span>
			<div className="footer-buttons">
				<Button onClickFn={clearCart} text="Очистить корзину" />
			</div>
		</div>
	)
}

export default React.memo(Footer)

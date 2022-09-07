import { MouseEvent } from 'react'
import { useLockBodyScroll } from 'react-use'
import { Portal } from 'react-portal'

import { CartHeader, CartFooter, CartBody, Fade } from '..'
import {
	cartItemsSelector,
	totalPriceSelector,
	isOpenCartSelector,
} from '../../store/cart/selectors'
import { useActions, useAppSelector } from '../../hooks'

function Cart() {
	const { toggleCart, clearCart } = useActions()
	const totalPrice = useAppSelector(totalPriceSelector)
	const cartItems = useAppSelector(cartItemsSelector)
	const isOpenCart = useAppSelector(isOpenCartSelector)

	useLockBodyScroll(isOpenCart)

	const stopPropagation = (e: MouseEvent<HTMLDivElement>) => {
		e.stopPropagation()
	}

	return (
		<Fade start={isOpenCart}>
			<Portal>
				<div className="modal modal-cart is-open" onClick={toggleCart}>
					<div className="modal-dialog" onClick={stopPropagation}>
						<CartHeader onCloseModal={toggleCart} />
						{cartItems.length > 0 ? (
							<>
								<CartBody changeCount={() => {}} cartItems={cartItems} />
								<CartFooter onClearCart={clearCart} totalPrice={totalPrice} />
							</>
						) : (
							<div className="">В корзине пусто</div>
						)}
					</div>
				</div>
			</Portal>
		</Fade>
	)
}

export default Cart

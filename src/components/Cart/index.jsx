import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCartAction } from '../../store/reducers/cartReducers/cart'
import { toggleCartAction } from '../../store/reducers/cartReducers/toggleCart'
import Body from './Body'
import Footer from './Footer'
import Header from './Header'

function Cart() {
	const dispatch = useDispatch()
	const totalPrice = useSelector(({ cartReducer }) =>
		cartReducer.cartItems.reduce((sum, { price, count }) => sum + price * count, 0)
	)

	const cartItems = useSelector(
		({ cartReducer }) => cartReducer.cartItems,
		(_, prev) => prev.length === 0
	)

	const closeCart = (e) => {
		if (e.target.matches('.modal-cart, .close')) {
			dispatch(toggleCartAction())
		}
	}

	const clearCart = () => dispatch(clearCartAction())

	const changeCount = (func, id) => dispatch(func(id))

	return (
		<div onClick={closeCart} className="modal modal-cart is-open">
			<div className="modal-dialog">
				<Header />
				<Body {...{ changeCount, cartItems }} />
				<Footer {...{ clearCart, totalPrice }} />
			</div>
		</div>
	)
}

export default Cart

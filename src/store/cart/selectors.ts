import { RootState } from '..'
import { CartItemId } from './types'

export const cartItemsSelector = ({ cart }: RootState) => Object.values(cart.cartItems)

export const countItemsSelector =
	(id: CartItemId) =>
	({ cart }: RootState) =>
		cart.cartItems[id]?.count ?? 0

export const isOpenCartSelector = ({ cart }: RootState) => cart.isOpenCart

export const totalPriceSelector = ({ cart }: RootState) => {
	return Object.entries(cart.cartItems)
		.map(([, { count, price }]) => count * price)
		.reduce((acc, el) => acc + el, 0)
}

export const countItemsCartSelector = ({ cart }: RootState) => {
	return Object.entries(cart.cartItems)
		.map(([, { count }]) => count)
		.reduce((acc, el) => acc + el, 0)
}

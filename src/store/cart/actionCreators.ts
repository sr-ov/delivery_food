import { CartActionCreatorsType, CartItemPayload } from './types'

export const addToCart = (payload: CartItemPayload) => ({
	type: CartActionCreatorsType.ADD_TO_CART,
	payload,
})

export const plusItem = (payload: CartItemPayload) => ({
	type: CartActionCreatorsType.PLUS_ITEM,
	payload,
})

export const minusItem = (payload: CartItemPayload) => ({
	type: CartActionCreatorsType.MINUS_ITEM,
	payload,
})

export const clearCart = () => ({
	type: CartActionCreatorsType.CLEAR_CART,
})

export const toggleCart = () => ({
	type: CartActionCreatorsType.TOGGLE_CART,
})

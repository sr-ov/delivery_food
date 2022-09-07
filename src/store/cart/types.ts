export interface CartState {
	cartItems: CartItems
	isOpenCart: boolean
}

export enum CartActionCreatorsType {
	ADD_TO_CART = 'ADD_TO_CART',
	CLEAR_CART = 'CLEAR_CART',
	PLUS_ITEM = 'PLUS_ITEM',
	MINUS_ITEM = 'MINUS_ITEM',
	TOGGLE_CART = 'TOGGLE_CART',
}

export type CartItemId = string
export type CartItemName = string
export type CartItemCount = number
export type CartItemPrice = number
export type CartItemData = {
	count: CartItemCount
	price: CartItemPrice
	id: CartItemId
	name: CartItemName
}
export type CartItemPayload = { price: CartItemPrice; id: CartItemId; name: CartItemName }
export type CartItems = Record<CartItemId, CartItemData>

export interface IAddToCart {
	type: CartActionCreatorsType.ADD_TO_CART
	payload: CartItemPayload
}

export interface IPlusItem {
	type: CartActionCreatorsType.PLUS_ITEM
	payload: CartItemPayload
}

export interface IMinusItem {
	type: CartActionCreatorsType.MINUS_ITEM
	payload: CartItemPayload
}

export interface IClearCart {
	type: CartActionCreatorsType.CLEAR_CART
}
export interface IToggleCart {
	type: CartActionCreatorsType.TOGGLE_CART
}

export type CartAction = IAddToCart | IPlusItem | IMinusItem | IClearCart | IToggleCart

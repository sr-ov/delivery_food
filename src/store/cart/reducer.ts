import produce from 'immer'

import { CartAction, CartActionCreatorsType, CartItems, CartState } from './types'

const initialState: CartState = {
	cartItems: {} as CartItems,
	isOpenCart: false,
}

export const cartReducer = produce(
	(draft: CartState = initialState, action: CartAction): CartState => {
		switch (action.type) {
			case CartActionCreatorsType.TOGGLE_CART: {
				draft.isOpenCart = !draft.isOpenCart

				break
			}

			case CartActionCreatorsType.ADD_TO_CART: {
				;(draft.cartItems[action.payload.id] ??= {
					...action.payload,
					count: 0,
				}).count += 1

				break
			}

			case CartActionCreatorsType.PLUS_ITEM: {
				draft.cartItems[action.payload.id].count += 1

				break
			}

			case CartActionCreatorsType.MINUS_ITEM: {
				const count = (draft.cartItems[action.payload.id].count -= 1)
				count === 0 && delete draft.cartItems[action.payload.id]

				break
			}

			case CartActionCreatorsType.CLEAR_CART: {
				draft.cartItems = {}

				break
			}

			default:
				return draft
		}
	}
)

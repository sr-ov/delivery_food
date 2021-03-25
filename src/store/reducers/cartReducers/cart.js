const initialState = {
	cartItems: [],
}

export const cartReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'ADD_TO_CART':
			if (state.cartItems.find(({ id }) => id === payload.id)) {
				return {
					...state,
					cartItems: [...map(state.cartItems, payload.id, inc)],
				}
			}

			return {
				...state,
				cartItems: [...state.cartItems, payload],
			}

		case 'INC_COUNT':
			return {
				...state,
				cartItems: [...map(state.cartItems, payload, inc)],
			}

		case 'DEC_COUNT':
			return {
				...state,
				cartItems: [...map(state.cartItems, payload, dec).filter(({ count }) => count > 0)],
			}

		case 'CLEAR_CART':
			return {
				...state,
				cartItems: [],
			}

		default:
			return state
	}
}

export const addToCartAction = (payload) => ({
	type: 'ADD_TO_CART',
	payload,
})

export const incCountAction = (payload) => ({
	type: 'INC_COUNT',
	payload,
})

export const decCountAction = (payload) => ({
	type: 'DEC_COUNT',
	payload,
})

export const clearCartAction = (payload) => ({
	type: 'CLEAR_CART',
	payload,
})

// =================================================================

const inc = (count) => (count += 1)
const dec = (count) => (count -= 1)

const map = (arr, payload, func) =>
	arr.map((el) => (el.id === payload ? { ...el, count: func(el.count) } : el))

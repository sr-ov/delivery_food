const initialState = {
	openCart: false,
}

export const toggleCartReducer = (state = initialState, { type }) => {
	switch (type) {
		case 'TOGGLE_CART':
			return {
				...state,
				openCart: !state.openCart,
			}
		default:
			return state
	}
}

export const toggleCartAction = () => ({
	type: 'TOGGLE_CART',
})

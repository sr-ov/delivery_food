const initialState = {
	loading: false,
}

export const loadingReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'LOADING':
			return {
				...state,
				loading: payload,
			}
		default:
			return state
	}
}

export const loadingChangeAction = (payload) => ({
	type: 'LOADING',
	payload,
})

import { loadingChangeAction } from './loading'

const URL = 'https://react-delivery-food-app-default-rtdb.firebaseio.com'

export const asyncData = (request = '', func = addRestaurantsListAction) => (dispatch) => {
	dispatch(loadingChangeAction(true))
	fetch(`${URL}/${request}.json`)
		.then((data) => data.json())
		.then((data) => {
			dispatch(func(data))
			dispatch(loadingChangeAction(false))
		})
		.catch((err) => console.error(err))
}

const initialState = {
	restaurantsList: [],
	menuStorage: [],
	menu: [],
}

export const dataReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'ADD_RESTAURANTS':
			const { restaurants, restaurantsList } = payload
			return {
				...state,
				restaurantsList,
				menuStorage: Object.values(restaurants)
					.map((el) => el.menu)
					.flat(),
			}

		case 'ADD_MENU':
			return {
				...state,
				menu: { ...payload },
			}

		default:
			return state
	}
}

export const addRestaurantsListAction = (payload) => ({
	type: 'ADD_RESTAURANTS',
	payload,
})

export const addMenuAction = (payload) => ({
	type: 'ADD_MENU',
	payload,
})

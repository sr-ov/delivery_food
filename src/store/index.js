import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { dataReducer } from './reducers/asyncData'
import { loadingReducer } from './reducers/loading'
import { cartReducer } from './reducers/cartReducers/cart'
import { toggleCartReducer } from './reducers/cartReducers/toggleCart'

const rootReducer = combineReducers({
	dataReducer,
	cartReducer,
	toggleCartReducer,
	loadingReducer,
})

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk)),
)

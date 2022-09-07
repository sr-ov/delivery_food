import { combineReducers, legacy_createStore as createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import { cartReducer } from './cart/reducer'

const rootReducer = combineReducers({
	cart: cartReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

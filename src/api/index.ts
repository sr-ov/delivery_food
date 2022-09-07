import axios from 'axios'

import { API_URL } from '../constants'
import { IRestaurantsItem, IRestaurant } from '../types'

const api = axios.create({
	baseURL: API_URL,
})

export const getMenu = async (restaurant: string) => {
	const { data } = await api.get<IRestaurant>(`restaurants/${restaurant}/.json`)

	return data
}

export const getAllMenu = async () => {
	const { data } = await api.get<Record<string, IRestaurant>>('restaurants/.json')

	return data
}

export const getRestaurants = async () => {
	const { data } = await api.get<IRestaurantsItem[]>('restaurantsList/.json')

	return data
}

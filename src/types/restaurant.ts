export interface IHeaderInfo {
	name: string
	stars: number
	price: number
}

export interface IMenu {
	id: string
	description: string
	image: string
	name: string
	price: number
}

export interface IRestaurant {
	headerInfo: IHeaderInfo
	menu: IMenu[]
}

export interface IRestaurantsItem {
	image: string
	kitchen: string
	name: string
	products: string
	price: number
	stars: number
	timeOfDelivery: number
}

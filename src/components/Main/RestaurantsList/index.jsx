import React from 'react'
import cNs from 'classnames'
import SearchMenu from '../SearchMenu'
import Header from './Header'
import Cards from './Cards'

function RestaurantsList({ value, valueDebounce, menuSearch, restaurantsList, inputHandler }) {
	return (
		<section className={cNs({ restaurants: !valueDebounce })}>
			<Header {...{ value, inputHandler }} />

			{!valueDebounce ? <Cards data={restaurantsList} /> : <SearchMenu data={menuSearch} />}

			{(valueDebounce && !menuSearch.length) && <p className="not">Ничего не найдено</p>}
		</section>
	)
}

export default React.memo(RestaurantsList)

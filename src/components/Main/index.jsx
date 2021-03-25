import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Switch, useLocation } from 'react-router-dom'
import { useDebounce } from '../../customHooks/useDebounce'
import { addMenuAction, asyncData } from '../../store/reducers/asyncData'
import Preloader from '../Preloader'
import Menu from './Menu'
import PromoSlider from './PromoSlider'
import RestaurantsList from './RestaurantsList'

function Main() {
	const dispatch = useDispatch()
	const { pathname } = useLocation()
	const [value, setValue] = useState('')
	const length = useSelector(({ dataReducer }) => dataReducer.restaurantsList.length)
	const { menu, restaurantsList } = useSelector(({ dataReducer }) => dataReducer)
	const loading = useSelector(({ loadingReducer }) => loadingReducer.loading)

	useEffect(() => {
		if (!length) {
			dispatch(asyncData())
		}

		if (pathname !== '/') {
			dispatch(asyncData(`/restaurants${pathname}`, addMenuAction))
		}
	}, [dispatch, pathname, length])

	const valueDebounce = useDebounce(value, 800)
	const menuSearch = useSelector(({ dataReducer }) =>
		dataReducer.menuStorage.filter(({ name }) =>
			name.toLowerCase().includes(valueDebounce.toLowerCase())
		)
	)

	const inputHandler = useCallback((e) => {
		if (/^(|[А-Яа-яЁё][А-Яа-яЁё\s]*)$/.test(e.target.value)) {
			setValue(e.target.value)
		}
	}, [])

	return (
		<div className="container">
			<PromoSlider />

			<Switch>
				<Route exact path="/">
					{loading ? (
						<Preloader />
					) : (
						<RestaurantsList
							{...{
								value,
								valueDebounce,
								menuSearch,
								restaurantsList,
								inputHandler,
							}}
						/>
					)}
				</Route>

				{restaurantsList.map(({ products }) => (
					<Route exact key={products} path={`/${products.replace('.json', '')}`}>
						{loading ? <Preloader /> : <Menu {...menu} />}
					</Route>
				))}
			</Switch>
		</div>
	)
}

export default React.memo(Main)

import { ChangeEvent, memo } from 'react'

import { Input } from '..'

interface RestaurantsListHeaderProps {
	searchValue: string
	onSearch: (e: ChangeEvent<HTMLInputElement>) => void
}

function RestaurantsListHeader({ searchValue, onSearch }: RestaurantsListHeaderProps) {
	return (
		<div className="section-heading">
			<h2 className="section-title">Рестораны</h2>
			<label className="search">
				<Input
					onChange={onSearch}
					value={searchValue}
					className="input-search"
					placeholder="Поиск блюд"
				/>
			</label>
		</div>
	)
}

export default memo(RestaurantsListHeader)

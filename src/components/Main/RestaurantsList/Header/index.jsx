import React from 'react'
import Input from '../../../Input'

function Header({ value, inputHandler }) {
	return (
		<div className="section-heading">
			<h2 className="section-title">Рестораны</h2>
			<Input
				onChangeFn={inputHandler}
				value={value}
				labelClassName="search"
				inputClassName="input-search"
				placeholder="Поиск блюд"
			/>
		</div>
	)
}

export default React.memo(Header)

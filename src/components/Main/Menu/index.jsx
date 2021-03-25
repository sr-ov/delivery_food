import React from 'react'
import Header from './Header'
import Cards from './Cards'

function Menu({ headerInfo, menu }) {
	return (
		<>
			<Header {...headerInfo} />
			<Cards data={menu} />
		</>
	)
}

export default Menu

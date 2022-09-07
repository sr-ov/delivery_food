import React from 'react'

import { MenuHeader, MenuCards } from '..'
import { IHeaderInfo, IMenu } from '../../types'

interface MenuProps {
	menu: IMenu[]
	headerInfo: IHeaderInfo
}

function Menu({ headerInfo, menu }: MenuProps) {
	return (
		<>
			<MenuHeader {...headerInfo} />
			<MenuCards data={menu} />
		</>
	)
}

export default Menu

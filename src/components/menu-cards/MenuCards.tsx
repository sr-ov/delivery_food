import { memo } from 'react'

import { MenuCardsItem } from '..'
import { IMenu } from '../../types'

interface MenuCardsProps {
	data: IMenu[]
}

function MenuCards({ data = [] }: MenuCardsProps) {
	return (
		<div className="cards cards-menu">
			{data.map((menuItem) => (
				<MenuCardsItem key={menuItem.id} {...menuItem} />
			))}
		</div>
	)
}

export default memo(MenuCards)

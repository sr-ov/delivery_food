import React from 'react'

import { MenuCards } from '..'
import { IMenu } from '../../types'
import styles from './SearchedMenu.module.css'

interface SearchedMenuProps {
	data: IMenu[]
}

function SearchedMenu({ data }: SearchedMenuProps) {
	return data.length > 0 ? (
		<MenuCards data={data} />
	) : (
		<div className={styles.notFoundItems}>Ничего не найдено</div>
	)
}

export default SearchedMenu

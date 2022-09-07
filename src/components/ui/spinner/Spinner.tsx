import React from 'react'

import styles from './Spinner.module.css'
import pizzaIcon from '../../../assets/img/pizza.svg'

function Spinner() {
	return (
		<div className={styles['overlay-loader']}>
			<img
				className={styles['loader']}
				alt="pizza"
				aria-hidden="true"
				{...pizzaIcon}
			/>
		</div>
	)
}

export default Spinner

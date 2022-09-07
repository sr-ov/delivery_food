import { memo } from 'react'
import Link from 'next/link'

import { Button, Input } from '..'
import { countItemsCartSelector } from '../../store/cart/selectors'
import { useActions, useAppSelector } from '../../hooks'

function Header() {
	const { toggleCart } = useActions()
	const count = useAppSelector(countItemsCartSelector)

	return (
		<header className="header-container">
			<div className="container">
				<header className="header">
					<Link href="/">
						<a className="logo">
							<img src="img/icon/logo.svg" alt="Logo" />
						</a>
					</Link>

					<label className="address">
						<Input className="input-address" placeholder="Адрес доставки" />
					</label>

					<div className="buttons">
						<Button className="button-primary" onClick={toggleCart}>
							{count ? `В корзине ${count}` : 'Корзина'}
						</Button>
					</div>
				</header>
			</div>
		</header>
	)
}

export default memo(Header)

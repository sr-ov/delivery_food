import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toggleCartAction } from '../../store/reducers/cartReducers/toggleCart'

import Button from '../Button'
import Input from '../Input'

function Header() {
	const dispatch = useDispatch()
	const count = useSelector(({ cartReducer }) =>
		cartReducer.cartItems.reduce((acc, { count }) => count + acc, 0)
	)

	const openCart = () => dispatch(toggleCartAction())

	return (
		<div className="header-container">
			<div className="container">
				<header className="header">
					<Link className="logo" to="/">
						<img src="img/icon/logo.svg" alt="Logo" />
					</Link>
					<Input
						labelClassName="address"
						inputClassName="input-address"
						placeholder="Адрес доставки"
					/>
					<div className="buttons">
						<Button
							onClickFn={openCart}
							text={`${count ? `В корзине ${count}` : 'Корзина'}`}
							classNames="button-primary"
						/>
					</div>
				</header>
			</div>
		</div>
	)
}

export default React.memo(Header)

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCartAction } from '../../../../store/reducers/cartReducers/cart'
import Button from '../../../Button'

function MenuCardsItem({ description, id, image, name, price }) {
	const dispatch = useDispatch()
	const [{ count } = {}] = useSelector(({ cartReducer }) =>
		cartReducer.cartItems.filter((el) => el.id === id)
	)

	const addToCart = () => {
		dispatch(addToCartAction({ id, price, name, count: 1 }))
	}

	return (
		<div className="card">
			<img src={image} alt="imag" className="card-image" />
			<div className="card-text">
				<div className="card-heading">
					<h3 className="card-title card-title-reg">{name}</h3>
				</div>
				<div className="card-info">
					<div className="ingredients">{description}</div>
				</div>
				<div className="card-buttons">
					<Button
						text={`В корзин${count ? `е ${count}` : 'у'}`}
						onClickFn={addToCart}
						classNames="button-primary"
					/>
					<strong className="card-price card-price-bold">{price} ₽</strong>
				</div>
			</div>
		</div>
	)
}

export default React.memo(MenuCardsItem)

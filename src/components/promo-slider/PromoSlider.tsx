import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'

import styles from './PromoSlider.module.css'

const settings = {
	autoplay: true,
	arrows: false,
	infinite: true,
	speed: 1000,
	swipe: false,
	cssEase: 'linear',
}

function PromoSlider() {
	return (
		<section className={styles.containerPromo}>
			<div className="container">
				<div className={styles.sliderWrapper}>
					<Slider {...settings}>
						<section className="promo pizza">
							<h1 className="promo-title">
								Онлайн-сервис <br />
								доставки еды на дом
							</h1>
							<p className="promo-text">
								Блюда из любимого ресторана привезет курьер в перчатках, маске и с
								антисептиком
							</p>
						</section>
						<section className="promo kebab">
							<h1 className="promo-title">
								Шашлыки на майские <br /> со скидкой 35%
							</h1>
							<p className="promo-text">
								Закажите шашлыки в любом ресторане до 10 мая и получите скидку по
								промокоду OMAGAD
							</p>
						</section>
						<section className="promo vegetables">
							<h1 className="promo-title">
								Скидка 20% на всю еду <br /> по промокоду LOVE.JS
							</h1>
							<p className="promo-text">
								Блюдо из ресторана привезут вместе с двумя подарочными книгами по
								фронтенду
							</p>
						</section>
						<section className="promo sushi">
							<h1 className="promo-title">
								Сеты со скидкой до 30% <br /> в ресторанах
							</h1>
							<p className="promo-text">
								Скидки на сеты до 30 мая по промокоду DADADA
							</p>
						</section>
					</Slider>
				</div>
			</div>
		</section>
	)
}

export default PromoSlider

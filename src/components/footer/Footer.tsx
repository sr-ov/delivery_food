import { memo } from 'react'

function Footer() {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer-block">
					<img src="img/icon/logo.svg" alt="logo" className="logo footer-logo" />
					<nav className="footer-nav">
						<span className="footer-link">Ресторанам</span>
						<span className="footer-link">Курьерам</span>
						<span className="footer-link">Пресс-центр</span>
						<span className="footer-link">Контакты</span>
					</nav>
					<div className="social-links">
						<a
							href="https://www.instagram.com/"
							target="_blank"
							rel="noreferrer"
							className="social-link"
						>
							<img src="img/social/instagram.svg" alt="instagram" />
						</a>
						<a
							href="https://www.facebook.com/"
							target="_blank"
							rel="noreferrer"
							className="social-link"
						>
							<img src="img/social/fb.svg" alt="facebook" />
						</a>
						<a
							href="https://vk.com/"
							target="_blank"
							rel="noreferrer"
							className="social-link"
						>
							<img src="img/social/vk.svg" alt="vk" />
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default memo(Footer)

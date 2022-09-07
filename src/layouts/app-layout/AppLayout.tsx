import { PropsWithChildren } from 'react'

import { Header, PromoSlider, Footer, Cart } from '../../components'

const AppLayout = ({ children: App }: PropsWithChildren) => {
	return (
		<div className="app">
			<Header />
			<PromoSlider />
			{App}
			<Footer />
			<Cart />
		</div>
	)
}

export default AppLayout

import { useState } from 'react'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import Router from 'next/router'

import { AppLayout } from '../layouts'
import { Spinner } from '../components'
import { store } from '../store'
import '../assets/styles/normalize.css'
import '../assets/styles/style.css'

export default function MyApp({ Component, pageProps }: AppProps) {
	const [loading, setLoading] = useState(false)

	Router.events.on('routeChangeStart', () => setLoading(true))
	Router.events.on('routeChangeComplete', () => setLoading(false))
	Router.events.on('routeChangeError', () => setLoading(false))

	return (
		<Provider store={store}>
			<AppLayout>{loading ? <Spinner /> : <Component {...pageProps} />}</AppLayout>
		</Provider>
	)
}

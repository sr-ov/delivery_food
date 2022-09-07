import { memo } from 'react'
import {
	GetStaticPaths,
	GetStaticProps,
	GetStaticPropsContext,
	GetStaticPropsResult,
	NextPage,
} from 'next'
import cn from 'classnames'
import { ParsedUrlQuery } from 'querystring'

import { MenuCards, MenuHeader } from '../components'
import { getMenu, getRestaurants } from '../api'
import { IRestaurant } from '../types'
import { removeExtJson } from '../utils'

interface MenuPageProps extends IRestaurant {}

const Menu: NextPage<MenuPageProps> = ({ headerInfo, menu }) => {
	return (
		<main className="container">
			<section className={cn('')}>
				<MenuHeader {...headerInfo} />
				<MenuCards data={menu} />
			</section>
		</main>
	)
}

export default memo(Menu)

interface Params extends ParsedUrlQuery {
	menu: string
}

export const getStaticProps: GetStaticProps<MenuPageProps, Params> = async ({
	params,
}: GetStaticPropsContext<Params>): Promise<GetStaticPropsResult<MenuPageProps>> => {
	if (!params) {
		return { notFound: true }
	}

	try {
		const { headerInfo, menu } = await getMenu(params.menu)

		return {
			props: { headerInfo, menu },
		}
	} catch (error) {
		return { notFound: true }
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const restaurants = await getRestaurants()
		const paths = restaurants.map(
			(restaurant) => `/${removeExtJson(restaurant.products)}`
		)

		return {
			paths,
			fallback: true,
		}
	} catch (error) {
		return {
			paths: [],
			fallback: false,
		}
	}
}

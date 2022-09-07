import { GetStaticProps, GetStaticPropsResult, NextPage } from 'next'
import cn from 'classnames'

import { useSearchMenu } from '../hooks'
import { RestaurantsList, RestaurantsListHeader, SearchedMenu } from '../components'
import { getRestaurants } from '../api'
import { IRestaurantsItem } from '../types'

interface NextPageProps {
	restaurants: IRestaurantsItem[]
}

const HomePage: NextPage<NextPageProps> = ({ restaurants }) => {
	const { fetchState, onSearch, searchedMenu, value, debouncedValue } = useSearchMenu()

	return (
		<main className="container">
			<section className={cn({ restaurants: !debouncedValue })}>
				<RestaurantsListHeader searchValue={value} onSearch={onSearch} />
				{!debouncedValue && <RestaurantsList data={restaurants} />}
				{debouncedValue && fetchState.value && <SearchedMenu data={searchedMenu} />}
			</section>
		</main>
	)
}

export default HomePage

export const getStaticProps: GetStaticProps<NextPageProps> = async (): Promise<
	GetStaticPropsResult<NextPageProps>
> => {
	try {
		const restaurants = await getRestaurants()

		return {
			props: { restaurants },
		}
	} catch (error) {
		console.error(error)

		return {
			notFound: true,
		}
	}
}

import { NextPage } from 'next'

import styles from '../assets/styles/pages/404.module.css'

const NotFound: NextPage = () => {
	return (
		<div className="container">
			<div className={styles.notFound}>Страница не найдена</div>
		</div>
	)
}

export default NotFound

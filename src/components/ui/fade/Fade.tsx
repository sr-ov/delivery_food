import { ReactNode } from 'react'
import { CSSTransition } from 'react-transition-group'

import styles from './Fade.module.css'

interface FadeProps {
	children: ReactNode
	start: boolean
}

const Fade = ({ children, start }: FadeProps) => {
	return (
		<CSSTransition
			in={start}
			timeout={200}
			mountOnEnter
			unmountOnExit
			classNames={styles}
		>
			{children}
		</CSSTransition>
	)
}

export default Fade

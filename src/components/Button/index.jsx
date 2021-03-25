import React from 'react'
import cNs from 'classnames'

function Button({ onClickFn, text, classNames }) {
	return (
		<button onClick={onClickFn} className={cNs('button', { [classNames]: classNames })}>
			<span className="button-cart-svg"></span>
			<span className="button-text">{text}</span>
		</button>
	)
}

export default React.memo(Button)

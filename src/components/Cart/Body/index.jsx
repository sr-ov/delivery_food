import React from 'react'
import BodyItem from '../BodyItem'

function Body({ cartItems, changeCount }) {
	return (
		<div className="modal-body">
			{cartItems.map((item) => (
				<BodyItem key={item.id} {...item} changeCount={changeCount} />
			))}
		</div>
	)
}

export default React.memo(Body)

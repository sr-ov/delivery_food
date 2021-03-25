import React from 'react'

function Header() {
	return (
		<div className="modal-header">
			<h3 className="modal-title">Корзина</h3>
			<button className="close">×</button>
		</div>
	)
}

export default React.memo(Header)

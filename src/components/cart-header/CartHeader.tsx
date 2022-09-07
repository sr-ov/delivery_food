import { memo, MouseEvent } from 'react'

interface CartHeaderProps {
	onCloseModal: (e: MouseEvent<HTMLButtonElement | HTMLDivElement>) => void
}

function CartHeader({ onCloseModal }: CartHeaderProps) {
	return (
		<div className="modal-header">
			<h3 className="modal-title">Корзина</h3>
			<button onClick={onCloseModal} className="close">
				×
			</button>
		</div>
	)
}

export default memo(CartHeader)

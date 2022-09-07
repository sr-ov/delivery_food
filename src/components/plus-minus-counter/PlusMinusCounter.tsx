import { useMemo } from 'react'

import { Button } from '..'

interface PlusMinusCounterProps {
	onPlus: VoidFunction
	onMinus: VoidFunction
	count: number
	minValue?: number
}

const MIN_VALUE = 1

const PlusMinusCounter = ({
	onPlus,
	onMinus,
	count,
	minValue = MIN_VALUE,
}: PlusMinusCounterProps) => {
	const isDisabled = useMemo(() => count === minValue, [count, minValue])

	return (
		<div className="food-counter">
			<Button
				className="counter-button minus"
				onClick={onMinus}
				disabled={isDisabled}
			/>
			<span className="counter">{count}</span>
			<Button className="counter-button plus" onClick={onPlus} />
		</div>
	)
}

export default PlusMinusCounter

import { useState } from 'react'
import { useDebounce as _useDebounce } from 'react-use'

export const useDebounce = (initialValue: string, delay: number) => {
	const [debouncedValue, setDebouncedValue] = useState('')

	_useDebounce(
		() => {
			setDebouncedValue(initialValue)
		},
		delay,
		[initialValue]
	)

	return debouncedValue
}

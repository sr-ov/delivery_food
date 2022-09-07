import { useState, useCallback, ChangeEvent, useMemo } from 'react'
import { useUpdateEffect, useAsyncFn } from 'react-use'

import { getAllMenu } from '../api'
import { RU_CHARS } from '../constants'
import { IMenu } from '../types'
import { useDebounce } from '.'

export const useSearchMenu = () => {
	const [value, setValue] = useState('')
	const [dirtyValue, setDirtyValue] = useState(false)
	const debouncedValue = useDebounce(value, 500)
	const [menu, setMenu] = useState<IMenu[]>([])
	const searchedMenu = useMemo(() => {
		return !debouncedValue
			? menu
			: menu.filter(
					(el) =>
						el.name.includes(debouncedValue) ||
						el.description.includes(debouncedValue)
			  )
	}, [menu, debouncedValue])

	const [state, doFetch] = useAsyncFn(async () => {
		const restaurantsInfo = await getAllMenu()
		const menu = Object.values(restaurantsInfo).flatMap((el) => el.menu)
		setMenu(menu)

		return true
	})

	const onSearch = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			if (!RU_CHARS.test(e.currentTarget.value)) return
			if (!dirtyValue) setDirtyValue(true)

			setValue(e.currentTarget.value)
		},
		[dirtyValue]
	)

	useUpdateEffect(() => {
		doFetch()
	}, [dirtyValue])

	return {
		value,
		debouncedValue,
		searchedMenu,
		onSearch,
		fetchState: state,
	}
}

import { memo } from 'react'
import { InputProps } from 'react-html-props'
import cn from 'classnames'

interface IInputProps extends InputProps {}

function Input({ className, ...props }: IInputProps) {
	return <input type="text" className={cn('input', className)} {...props} />
}

export default memo(Input)

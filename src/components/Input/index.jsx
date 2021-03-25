import React from 'react'

function Input({ labelClassName, inputClassName, placeholder, value, onChangeFn }) {
	return (
		<label className={labelClassName}>
			<input
				onChange={onChangeFn}
				type="text"
				className={`input ${inputClassName}`}
				value={value}
				placeholder={placeholder}
			/>
		</label>
	)
}

export default React.memo(Input)

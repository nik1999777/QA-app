import { FormControlLabel, Checkbox, InputLabel } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Controller } from 'react-hook-form'
import { IFormInputProps } from '../../../types/InputProps'

const InputCheckbox: React.FC<IFormInputProps> = ({
	name,
	control,
	setValue,
	label,
	content,
}) => {
	const [selectedItems, setSelectedItems] = useState<any>([])

	const handleSelect = (value: string) => {
		const isPresent = selectedItems.indexOf(value)
		if (isPresent !== -1) {
			const remaining = selectedItems.filter((item: string) => item !== value)
			setSelectedItems(remaining)
		} else {
			setSelectedItems((prevItems: any) => [...prevItems, value])
		}
	}

	useEffect(() => {
		setValue(name, selectedItems)
	}, [selectedItems])

	return (
		<>
			<InputLabel>{label}</InputLabel>
			<div>
				{content.map((option: any) => {
					return (
						<FormControlLabel
							label={option.label}
							key={option.id}
							control={
								<Controller
									name={name}
									control={control}
									render={() => {
										return (
											<Checkbox
												checked={selectedItems.includes(option.value)}
												onChange={() => handleSelect(option.value)}
											/>
										)
									}}
								/>
							}
						/>
					)
				})}
			</div>
		</>
	)
}

export default InputCheckbox

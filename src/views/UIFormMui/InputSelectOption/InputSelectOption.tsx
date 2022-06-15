import { InputLabel } from '@mui/material'
import React from 'react'
import { Controller } from 'react-hook-form'
import { IFormInputProps } from '../../../types/InputProps'

import styles from './InputSelectOption.module.scss'

const InputSelectOption: React.FC<IFormInputProps> = ({
	name,
	control,
	label,
	content,
}) => {
	const generateSingleOptions = () => {
		return content.map((option: any) => {
			return (
				<option key={option.id} value={option.value}>
					{option.label}
				</option>
			)
		})
	}
	return (
		<>
			<InputLabel htmlFor='pet-select'>{label}</InputLabel>
			<Controller
				control={control}
				name={name}
				render={({ field: { onChange, value } }) => (
					<select className={styles.select} onChange={onChange} value={value}>
						<option value='' disabled />
						{generateSingleOptions()}
					</select>
				)}
			/>
		</>
	)
}

export default InputSelectOption

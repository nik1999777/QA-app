import {
	FormControlLabel,
	InputLabel,
	Radio,
	RadioGroup,
	Typography,
} from '@mui/material'
import React from 'react'
import { Controller } from 'react-hook-form'
import { IFormInputProps } from '../../../types/InputProps'

const InputRadio: React.FC<IFormInputProps> = ({
	control,
	label,
	name,
	errors,
	content,
}) => {
	const generateRadioOptions = (content: any[]) => {
		return content.map(singleOptionValue => (
			<FormControlLabel
				value={singleOptionValue.value}
				control={<Radio />}
				label={singleOptionValue.label}
				key={singleOptionValue.id}
			/>
		))
	}

	return (
		<>
			<InputLabel>{label}</InputLabel>
			<Controller
				name={name}
				control={control}
				render={({ field: { onChange, value } }) => (
					<>
						<RadioGroup row value={value} onChange={onChange}>
							{generateRadioOptions(content)}
						</RadioGroup>
						<Typography variant='subtitle2' color='error'>
							{errors.gender?.message}
						</Typography>
					</>
				)}
			/>
		</>
	)
}

export default InputRadio

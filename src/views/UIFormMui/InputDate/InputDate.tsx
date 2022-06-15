import React from 'react'
import { Controller } from 'react-hook-form'
import { IFormInputProps } from '../../../types/InputProps'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { InputLabel, TextField } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

const InputDate: React.FC<IFormInputProps> = ({ control, label, name }) => {
	return (
		<>
			<InputLabel>{label}</InputLabel>
			<Controller
				name={name}
				control={control}
				render={({ field: { value, onChange } }) => (
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<DatePicker
							disableFuture
							openTo='year'
							views={['year', 'month', 'day']}
							value={value}
							onChange={onChange}
							renderInput={params => (
								<TextField
									color='success'
									size='small'
									sx={{ width: '100%' }}
									{...params}
								/>
							)}
						/>
					</LocalizationProvider>
				)}
			/>
		</>
	)
}

export default InputDate

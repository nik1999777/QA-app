import { InputLabel, TextField } from '@mui/material'
import { Controller } from 'react-hook-form'
import { IFormInputProps } from '../../../types/InputProps'

const InputText: React.FC<IFormInputProps> = ({
	control,
	label,
	name,
	placeholder,
}) => {
	return (
		<>
			<InputLabel>{label}</InputLabel>
			<Controller
				name={name}
				control={control}
				render={({ field: { onChange, value }, fieldState: { error } }) => (
					<TextField
						color='success'
						error={!!error}
						helperText={error ? error.message : null}
						size='small'
						sx={{ width: '100%' }}
						variant='outlined'
						value={value}
						onChange={onChange}
						placeholder={placeholder}
					/>
				)}
			/>
		</>
	)
}

export default InputText

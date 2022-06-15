import { InputLabel, TextareaAutosize } from '@mui/material'
import { Controller } from 'react-hook-form'
import { IFormInputProps } from '../../../types/InputProps'

const InputTextArea: React.FC<IFormInputProps> = ({ name, label, control }) => {
	return (
		<>
			<InputLabel>{label}</InputLabel>
			<Controller
				name={name}
				control={control}
				render={({ field: { onChange, value } }) => (
					<TextareaAutosize
						style={{ maxWidth: '800px' }}
						minRows={4}
						value={value}
						onChange={onChange}
					/>
				)}
			/>
		</>
	)
}

export default InputTextArea

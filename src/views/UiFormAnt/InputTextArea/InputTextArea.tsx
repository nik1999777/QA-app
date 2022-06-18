import { Input } from 'antd'
import { Controller } from 'react-hook-form'
import { IFormInputProps } from '../../../types/InputProps'

const { TextArea } = Input

const InputTextArea: React.FC<IFormInputProps> = ({
	name,
	label,
	control,
	placeholder,
}) => {
	return (
		<div style={{ marginTop: '-15px' }}>
			<p>{label}</p>
			<Controller
				name={name}
				control={control}
				render={({ field: { onChange, value } }) => (
					<TextArea
						style={{ minHeight: '100px' }}
						placeholder={placeholder}
						value={value}
						onChange={onChange}
					/>
				)}
			/>
		</div>
	)
}

export default InputTextArea

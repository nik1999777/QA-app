import { Input, Typography } from 'antd'
import FormItem from 'antd/lib/form/FormItem'
import { Controller } from 'react-hook-form'
import { IFormInputProps } from '../types'

const { TextArea } = Input
const { Text } = Typography

const InputTextArea: React.FC<IFormInputProps> = ({
	name,
	label,
	control,
	placeholder,
}) => {
	return (
		<FormItem>
			<Text>{label}</Text>
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
		</FormItem>
	)
}

export default InputTextArea

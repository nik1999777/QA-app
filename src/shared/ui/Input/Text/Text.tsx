import { Controller } from 'react-hook-form'
import { Input, Typography } from 'antd'
import { IFormInputProps } from '../types'
import FormItem from 'antd/lib/form/FormItem'

const { Text } = Typography

const InputText: React.FC<IFormInputProps> = ({
	control,
	name,
	placeholder,
	label,
}) => {
	return (
		<FormItem>
			<Text>{label}</Text>
			<Controller
				name={name}
				control={control}
				render={({ field: { onChange, value } }) => (
					<Input value={value} onChange={onChange} placeholder={placeholder} />
				)}
			/>
		</FormItem>
	)
}

export default InputText

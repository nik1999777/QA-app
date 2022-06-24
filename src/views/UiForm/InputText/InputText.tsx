import { Controller } from 'react-hook-form'
import { Input, Typography } from 'antd'
import { IFormInputProps } from '../../../types/InputProps'
import FormItem from 'antd/lib/form/FormItem'
import { WarningOutlined } from '@ant-design/icons'

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
				rules={{
					required: true,
				}}
				name={name}
				control={control}
				render={({ field: { onChange, value } }) => (
					<Input
						// status={error && 'error'}
						value={value}
						onChange={onChange}
						placeholder={placeholder}
					/>
				)}
			/>
		</FormItem>
	)
}

export default InputText

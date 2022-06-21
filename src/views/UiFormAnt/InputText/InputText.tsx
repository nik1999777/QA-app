import { Controller } from 'react-hook-form'
import { Input } from 'antd'
import { IFormInputProps } from '../../../types/InputProps'
import FormItem from 'antd/lib/form/FormItem'

const InputText: React.FC<IFormInputProps> = ({
	control,
	name,
	placeholder,
	label,
}) => {
	return (
		<FormItem label={label}>
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

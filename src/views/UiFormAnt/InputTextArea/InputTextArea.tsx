import { Input } from 'antd'
import FormItem from 'antd/lib/form/FormItem'
import { Controller } from 'react-hook-form'
import { IFormInputProps } from '../../../types/InputProps'

const { TextArea } = Input

const InputTextArea: React.FC<IFormInputProps> = ({ name, label, control }) => {
	return (
		<FormItem>
			<p>{label}</p>
			<Controller
				name={name}
				control={control}
				render={({ field: { onChange, value } }) => (
					<TextArea value={value} onChange={onChange} />
				)}
			/>
		</FormItem>
	)
}

export default InputTextArea

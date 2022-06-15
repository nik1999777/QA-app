import { Controller } from 'react-hook-form'
import { Input } from 'antd'
import { IFormInputProps } from '../../../types/InputProps'
import FormItem from 'antd/lib/form/FormItem'

import styles from './InputText.module.scss'

const InputText: React.FC<IFormInputProps> = ({
	control,
	label,
	name,
	placeholder,
}) => {
	return (
		<FormItem label={label}>
			<Controller
				name={name}
				control={control}
				render={({ field: { onChange, value } }) => (
					<Input
						className={styles.input}
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

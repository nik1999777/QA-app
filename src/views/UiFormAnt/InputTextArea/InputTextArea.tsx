import { Input } from 'antd'
import FormItem from 'antd/lib/form/FormItem'
import { Controller } from 'react-hook-form'
import { IFormInputProps } from '../../../types/InputProps'

import styles from './InputTextArea.module.scss'

const { TextArea } = Input

const InputTextArea: React.FC<IFormInputProps> = ({ name, label, control }) => {
	return (
		<>
			<FormItem label={label}>
				<Controller
					name={name}
					control={control}
					render={({ field: { onChange, value } }) => (
						<TextArea
							className={styles.text}
							value={value}
							onChange={onChange}
						/>
					)}
				/>
			</FormItem>
		</>
	)
}

export default InputTextArea

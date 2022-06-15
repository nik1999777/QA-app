import { Checkbox, Typography } from 'antd'
import FormItem from 'antd/lib/form/FormItem'
import React from 'react'
import { Controller } from 'react-hook-form'
import { IFormInputProps } from '../../../types/InputProps'

const { Text } = Typography

import styles from './InputCheckbox.module.scss'

const InputCheckbox: React.FC<IFormInputProps> = ({
	name,
	control,
	label,
	content,
	display,
}) => {
	return (
		<FormItem label={label}>
			<Controller
				name={name}
				control={control}
				render={({ field: { onChange, value } }) => {
					return (
						<>
							<Checkbox.Group
								className={styles.checkbox}
								style={{ display: display }}
								options={content}
								value={value}
								onChange={onChange}
								name={name}
							/>
						</>
					)
				}}
			/>
		</FormItem>
	)
}

export default InputCheckbox

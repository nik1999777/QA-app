import React from 'react'
import { Controller } from 'react-hook-form'
import { IFormInputProps } from '../../../types/InputProps'
import { Radio } from 'antd'
import FormItem from 'antd/lib/form/FormItem'

import styles from './InputRadio.module.scss'

const InputRadio: React.FC<IFormInputProps> = ({
	control,
	label,
	name,
	content,
	display,
}) => {
	const generateRadioOptions = (content: any[]) => {
		return content.map(singleOptionValue => (
			<Radio
				className={styles.radio__item}
				key={singleOptionValue.id}
				value={singleOptionValue.value}
			>
				{singleOptionValue.label}
			</Radio>
		))
	}

	return (
		<FormItem label={label}>
			<Controller
				name={name}
				control={control}
				render={({ field: { onChange, value } }) => (
					<Radio.Group
						className={styles.radio}
						style={{ display: display }}
						value={value}
						onChange={onChange}
					>
						{generateRadioOptions(content)}
					</Radio.Group>
				)}
			/>
		</FormItem>
	)
}

export default InputRadio

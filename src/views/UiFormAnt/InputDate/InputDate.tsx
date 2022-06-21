import React from 'react'
import { Controller } from 'react-hook-form'
import { IFormInputProps } from '../../../types/InputProps'
import FormItem from 'antd/lib/form/FormItem'
import { DatePicker } from 'antd'

const InputDate: React.FC<IFormInputProps> = ({ control, label, name }) => {
	return (
		<FormItem label={label}>
			<Controller
				name={name}
				control={control}
				render={({ field: { onChange, value } }) => (
					<DatePicker onChange={onChange} value={value} />
				)}
			/>
		</FormItem>
	)
}

export default InputDate

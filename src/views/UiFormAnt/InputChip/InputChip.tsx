import { Select } from 'antd'
import FormItem from 'antd/lib/form/FormItem'
import React from 'react'
import { Controller } from 'react-hook-form'
import { IFormInputProps } from '../../../types/InputProps'

const { Option } = Select

const InputChip: React.FC<IFormInputProps> = ({
	control,
	label,
	name,
	placeholder,
	content,
}) => {
	const generateSingleSubjects = () => {
		return content.map((subject: any) => (
			<Option placeholder={placeholder} key={subject} value={subject}>
				{subject}
			</Option>
		))
	}

	return (
		<FormItem label={label}>
			<Controller
				control={control}
				name={name}
				render={({ field: { onChange, value } }) => (
					<Select
						mode='tags'
						value={value}
						style={{ width: '100%' }}
						placeholder='select one country'
						onChange={onChange}
					>
						{generateSingleSubjects()}
					</Select>
				)}
			/>
		</FormItem>
	)
}

export default InputChip

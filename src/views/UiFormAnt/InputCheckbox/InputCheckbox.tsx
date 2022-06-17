import { Checkbox, Space } from 'antd'
import FormItem from 'antd/lib/form/FormItem'
import React from 'react'
import { Controller } from 'react-hook-form'
import { IFormInputProps } from '../../../types/InputProps'

const InputCheckbox: React.FC<IFormInputProps> = ({
	name,
	control,
	label,
	content,
	direction,
}) => {
	const generateCheckboxOptions = (content: any) => {
		return content.map((singleOptionValue: any) => (
			<Checkbox key={singleOptionValue.id} value={singleOptionValue.value}>
				{singleOptionValue.label}
			</Checkbox>
		))
	}

	return (
		<FormItem>
			<p>{label}</p>
			<Controller
				name={name}
				control={control}
				render={({ field: { onChange, value } }) => (
					<Checkbox.Group value={value} onChange={onChange}>
						<Space direction={direction}>
							{generateCheckboxOptions(content)}
						</Space>
					</Checkbox.Group>
				)}
			/>
		</FormItem>
	)
}

export default InputCheckbox

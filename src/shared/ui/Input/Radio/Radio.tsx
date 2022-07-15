import React from 'react'
import { Controller } from 'react-hook-form'
import { IFormInputProps } from '../types'
import { Radio, Space, Typography } from 'antd'
import FormItem from 'antd/lib/form/FormItem'

const { Text } = Typography

const InputRadio: React.FC<IFormInputProps> = ({
	control,
	label,
	name,
	content,
	direction,
}) => {
	const generateRadioOptions = (content: any[]) => {
		return content.map(singleOptionValue => (
			<Radio key={singleOptionValue.id} value={singleOptionValue.value}>
				{singleOptionValue.label}
			</Radio>
		))
	}

	return (
		<FormItem>
			<Text style={{ display: 'block', marginBottom: '10px' }}>{label}</Text>
			<Controller
				name={name}
				control={control}
				render={({ field: { onChange, value } }) => (
					<Radio.Group value={value} onChange={onChange}>
						<Space direction={direction}>{generateRadioOptions(content)}</Space>
					</Radio.Group>
				)}
			/>
		</FormItem>
	)
}

export default InputRadio

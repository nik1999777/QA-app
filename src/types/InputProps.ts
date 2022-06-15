import { Control, FieldValues } from 'react-hook-form'

export interface IFormInputProps {
	control: Control<FieldValues, unknown> | undefined
	name: string
	label?: string
	placeholder?: string
	disabled?: boolean
	setValue?: any
	setCityState?: any
	errors?: any
	content?: any
	display?: any
}

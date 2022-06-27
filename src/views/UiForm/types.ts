import { UseFormSetValue } from 'react-hook-form'

import { IFormAutoTestsInput } from '../../components/AutoTestsForm/AutoTestsForm/types'
import { IFormPracticeInput } from '../../components/PracticeForm/PracticeForm/types'

type IFormInput = IFormAutoTestsInput | IFormPracticeInput

export interface IFormInputProps {
	control: any
	name: string
	label?: string
	placeholder?: string
	setValue?: UseFormSetValue<IFormInput>
	content?: any
	direction?: 'horizontal' | 'vertical'
}

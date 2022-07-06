import { UseFormSetValue } from 'react-hook-form'

import { IFormAutoTestsInput } from '../../components/AutoTestsGenerateForm/FormMain/types'
import { IFormPracticeInput } from '../../components/PracticeForm/FormMain/types'

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

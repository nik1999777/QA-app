import { IFormAutoTestsInput } from '../AutoTestsGenerateForm/FormMain/types'
import { IFormPracticeInput } from '../PracticeForm/FormMain/types'

export interface IFormResult {
	data: IFormPracticeInput | IFormAutoTestsInput
}

export interface IFormInput {
	firstName: string
	lastName: string
	email: string
	gender: string
	phone: string
	birthDate: string
	subjects: string[]
	hobbies: string[]
	state: string
	city: string
	slider: number
	address: string
	language: string
	file: string
}

export interface IFormAutoTestsInput {
	url: string
	code: string
	title_check: boolean
	console_check: boolean
	manual: string
	title_1: string
	title_2: string
	title_3: string
	steps_1: string
	steps_2: string
	steps_3: string
	allure_reports: boolean
	attachments: string[]
	source_code: string
	CI_CD_tool: string
	browser_type: string
	browsers_hub: string
	notification: string[]
	test_management: string[]
}

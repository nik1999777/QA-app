export interface IFormInput {
	firstName: string
	lastName: string
	email: string
	gender: string
	phone: string
	birthDate: Date
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
	URL: string
	code: string
	titleTest: string
	consoleErrorsTest: string
	manualTests: string
	sourceCode: string
	toolCICD: string
	browserType: string
	browsersHub: string
	notification: string
	testManagement: string
	testsResults: string
	attachments: string
}

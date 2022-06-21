import React from 'react'
import { IFormViewsProps } from '../../../types/FormViewsProps'
import Ui from '../../../views/UiFormAnt'

import Content from '../../../content'

const FormViews: React.FC<IFormViewsProps> = ({
	control,
	setValue,
	errors,
}) => {
	return (
		<>
			<Ui.InputText name='firstName' control={control} label='First Name' />
			<Ui.InputText name='lastName' control={control} label='Last Name' />
			<Ui.InputText
				name='email'
				control={control}
				label='Email'
				placeholder='name@example.com'
			/>
			<Ui.InputText name='phone' control={control} label='Phone' />
			<Ui.InputSelectOption
				label='Select Language'
				name='language'
				control={control}
				content={Content.LanguageContent.options}
			/>
			<Ui.InputDate name='birthDate' control={control} label='Birthdate' />
			<Ui.InputRadio
				name='gender'
				control={control}
				label='Gender'
				errors={errors}
				content={Content.GenderContent.options}
			/>
			<Ui.InputCheckbox
				control={control}
				setValue={setValue}
				name='hobbies'
				label='Hobbies'
				content={Content.HobbiesContent.options}
			/>
			<Ui.InputChip
				name='subjects'
				control={control}
				label='Subjects'
				content={Content.SubjectsContent.subjects}
			/>
			{/* <Ui.InputSelect
				name='state'
				control={control}
				label='Select State'
				content={Content.StateCityContent.options}
			/> */}
		</>
	)
}

export default FormViews

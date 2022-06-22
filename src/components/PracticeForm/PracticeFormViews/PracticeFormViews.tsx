import React from 'react'
import { IFormViewsProps } from '../../../types/FormViewsProps'
import Ui from '../../../views/UiForm'

import Content from '../../../content'
import Box from '../../../views/Common/Box/Box'

import styles from './PracticeFormViews.module.scss'

const PracticeFormViews: React.FC<IFormViewsProps> = ({
	control,
	setValue,
	errors,
}) => {
	return (
		<>
			<Box className={styles.wrapper}>
				<Ui.InputText name='firstName' control={control} label='First Name' />
				<Ui.InputText name='lastName' control={control} label='Last Name' />
			</Box>

			<Box className={styles.wrapper}>
				<Ui.InputText
					name='email'
					control={control}
					label='Email'
					placeholder='name@example.com'
				/>
				<Ui.InputText name='phone' control={control} label='Phone' />
			</Box>

			<Box className={styles.wrapper}>
				<Ui.InputSelectOption
					label='Select Language'
					name='language'
					control={control}
					content={Content.LanguageContent.options}
				/>
				<Ui.InputDate name='birthDate' control={control} label='Birthdate' />
			</Box>

			<Box className={styles.wrapper}>
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
			</Box>

			<Ui.InputChip
				name='subjects'
				control={control}
				label='Subjects'
				content={Content.SubjectsContent.subjects}
			/>
			<Ui.InputSelect
				name='stateCity'
				control={control}
				placeholder='Select'
				label='Select State and City'
				setValue={setValue}
			/>
			<Ui.InputSlider
				name='slider'
				control={control}
				label='Slider'
				setValue={setValue}
			/>
			<Ui.InputTextArea name='address' control={control} label='Address' />
		</>
	)
}

export default PracticeFormViews

import React from 'react'
import Ui from '../../../views/UiForm'

import Content from '../../../content'
import Box from '../../../views/Common/Box/Box'

import styles from './PracticeFormViews.module.scss'
import { IFormViewsProps } from './types'

const PracticeFormViews: React.FC<IFormViewsProps> = ({ control }) => {
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
					content={Content.GenderContent.options}
				/>
				<Ui.InputCheckbox
					control={control}
					name='hobbies'
					label='Hobbies'
					content={Content.HobbiesContent.options}
				/>
			</Box>

			<Ui.InputFile
				control={control}
				name='file'
				label='file'
			/>

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
			/>
			<Ui.InputSlider name='slider' control={control} label='Slider' />
			<Ui.InputTextArea name='address' control={control} label='Address' />
		</>
	)
}

export default PracticeFormViews

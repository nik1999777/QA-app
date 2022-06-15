import React, { useState } from 'react'
import Ui from '../../../views/UIFormMui'
import { Box, Grid, Typography } from '@mui/material'

import RadioGenderContent from '../../../content/ContentForm/GenderContent.json'
import CheckboxHobbiesContent from '../../../content/ContentForm/HobbiesContent.json'
import ChipSubjectsContent from '../../../content/ContentForm/SubjectsContent.json'
import SelectOptionLanguagesContent from '../../../content/ContentForm/LanguageContent.json'
import { IFormViewsProps } from '../../../types/FormViewsProps'

const FormViews: React.FC<IFormViewsProps> = ({
	control,
	setValue,
	errors,
}) => {
	const [cityState, setCityState] = useState('')

	return (
		<>
			<Typography sx={{ mb: 1 }} variant='h5'>
				Student Registration Form
			</Typography>
			<Box sx={{ mt: 2 }} display='grid' gap={1}>
				<Grid container spacing={2} columns={16}>
					<Grid item xs={8}>
						<Ui.InputText
							name='firstName'
							control={control}
							label='First Name'
						/>
					</Grid>
					<Grid item xs={8}>
						<Ui.InputText name='lastName' control={control} label='Last Name' />
					</Grid>
				</Grid>

				<Grid container spacing={2} columns={16}>
					<Grid item xs={8}>
						<Ui.InputText
							name='email'
							control={control}
							label='Email'
							placeholder='name@example.com'
						/>
					</Grid>
					<Grid item xs={8}>
						<Ui.InputText name='phone' control={control} label='Phone' />
					</Grid>
				</Grid>

				<Grid container spacing={2} columns={16}>
					<Grid item xs={8}>
						<Ui.InputSelectOption
							label='Select Language'
							name='language'
							control={control}
							content={SelectOptionLanguagesContent.options}
						/>
					</Grid>
					<Grid item xs={8}>
						<Ui.InputDate
							name='birthDate'
							control={control}
							label='Birthdate'
						/>
					</Grid>
				</Grid>

				<Grid container spacing={2} columns={16}>
					<Grid item xs={8}>
						<Ui.InputRadio
							name='gender'
							control={control}
							label='Gender'
							errors={errors}
							content={RadioGenderContent.options}
						/>
					</Grid>
					<Grid item xs={8}>
						<Ui.InputCheckbox
							control={control}
							setValue={setValue}
							name='hobbies'
							label='Hobbies'
							content={CheckboxHobbiesContent.options}
						/>
					</Grid>
				</Grid>

				<Ui.InputChip
					name='subjects'
					control={control}
					label='Subjects'
					content={ChipSubjectsContent.subjects}
				/>

				<Grid container spacing={2} columns={16}>
					<Grid item xs={8}>
						<Ui.InputSelect
							setCityState={setCityState}
							name='state'
							control={control}
							label='Select State'
							setValue={setValue}
						/>
					</Grid>
					<Grid item xs={8}>
						<Ui.InputSelect
							disabled={cityState === ''}
							name='city'
							control={control}
							label='Select City'
							setValue={setValue}
						/>
					</Grid>
				</Grid>

				<Ui.InputSlider
					name='slider'
					control={control}
					setValue={setValue}
					label='Slider Input'
				/>

				<Ui.InputTextArea name='address' label='Address' control={control} />

				<Ui.InputFile name='file' label='File' control={control} />
			</Box>
		</>
	)
}

export default FormViews

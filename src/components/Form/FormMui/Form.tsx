import { useForm, SubmitHandler } from 'react-hook-form'
import { Box, Button, Paper, Typography } from '@mui/material'
import FormViews from './FormViews'
import React from 'react'
import { defaultValues } from '../defaultValues'
import { yupResolver } from '@hookform/resolvers/yup'
import { validationSchema } from '../validation'
import FormFooterViews from '../../FormFooter/FormFooter'
import { styleBoxForm, stylePaperForm } from './style'
import { IFormInput } from '../../../types/InputForm'

const Form: React.FC<any> = ({ setData }) => {
	const {
		handleSubmit,
		control,
		setValue,
		reset,
		formState: { errors },
	} = useForm<IFormInput>({
		defaultValues,
		resolver: yupResolver(validationSchema),
	})

	const onSubmit: SubmitHandler<IFormInput> = data => setData(data)

	return (
		<>
			<Typography textAlign='center' variant='h4'>
				Practice Form
			</Typography>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Box sx={{ mt: 1 }}>
					<Paper sx={stylePaperForm} elevation={2}>
						<FormViews control={control} setValue={setValue} errors={errors} />
						<Box sx={styleBoxForm}>
							<Button type='submit' variant='contained'>
								Submit
							</Button>
							<Button onClick={() => reset()} variant={'outlined'}>
								Reset
							</Button>
							<FormFooterViews />
						</Box>
					</Paper>
				</Box>
			</form>
		</>
	)
}

export default Form

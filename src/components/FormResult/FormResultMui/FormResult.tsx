import React from 'react'
import { Box, Grid, Paper, Typography } from '@mui/material'

import styles from './FormResult.module.scss'
import { IFormInput } from '../../PracticeForm/types'

type IFormResult = {
	data: IFormInput
}

const FormResult: React.FC<IFormResult> = ({ data }) => {
	const arrayData: any[] = Object.entries(data)

	const generateSingleKeys = () => {
		return arrayData.map(key => (
			<Typography key={key} className={styles.typography__keys}>
				{key[0]}
			</Typography>
		))
	}

	const generateSingleValues = () => {
		return arrayData.map(value => (
			<Typography key={value} className={styles.typography__values}>
				{Array.isArray(value[1])
					? value[1].join(', ')
					: value[0] === 'birthDate'
					? value[1].toLocaleString()
					: value[1]}
			</Typography>
		))
	}

	return (
		<>
			<Box className={styles.box}>
				<Paper
					sx={{ backgroundColor: '#141414' }}
					className={styles.paper}
					elevation={2}
				>
					<Typography
						className={styles.title}
						sx={{ mb: '20px' }}
						textAlign='center'
						variant='h5'
					>
						Thanks for submitting the form
					</Typography>
					<Grid container columns={16}>
						<Grid item xs={8}>
							<Typography
								className={styles.title}
								textAlign='center'
								variant='subtitle1'
							>
								Label
							</Typography>
							{generateSingleKeys()}
						</Grid>
						<Grid item xs={8}>
							<Typography
								className={styles.title}
								textAlign='center'
								variant='subtitle1'
							>
								Values
							</Typography>
							{generateSingleValues()}
						</Grid>
					</Grid>
				</Paper>
			</Box>
		</>
	)
}

export default FormResult

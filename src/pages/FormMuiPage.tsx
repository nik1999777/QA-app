import { Typography } from '@mui/material'
import React, { useState } from 'react'
import ContainerLeft from '../components/Containers/ContainerLeft/ContainerLeft'
import ContainerRight from '../components/Containers/ContainerRight/ConteinerRight'
import Form from '../components/Form/FormMui/Form'
import FormResult from '../components/FormResult/FormResultMui/FormResult'

const FormPage: React.FC = () => {
	const [data, setData] = useState()

	console.log(data ? JSON.stringify(data) : null)

	return (
		<>
			<ContainerLeft>
				<Form setData={setData} />
			</ContainerLeft>
			<ContainerRight>
				{data ? (
					<FormResult data={data} />
				) : (
					<Typography
						sx={{ mt: '50%' }}
						textAlign='center'
						color='white'
						variant='h4'
					>
						Please enter your data and submit
					</Typography>
				)}
			</ContainerRight>
		</>
	)
}

export default FormPage

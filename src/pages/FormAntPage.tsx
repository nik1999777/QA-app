import { useState } from 'react'
import ContainerLeft from '../components/Containers/ContainerLeft/ContainerLeft'
import ContainerRight from '../components/Containers/ContainerRight/ConteinerRight'
import Form from '../components/Form/Form/Form'
import FormResult from '../components/FormResult/FormResultMui/FormResult'

const FormAntPage = () => {
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
					<div>Please enter your data and submit</div>
				)}
			</ContainerRight>
		</>
	)
}

export default FormAntPage

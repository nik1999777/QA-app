import { useState } from 'react'
import AutoTestsForm from '../components/AutoTestsForm/AutoTestsForm'
import ContainerLeft from '../components/Containers/ContainerLeft/ContainerLeft'
import ContainerRight from '../components/Containers/ContainerRight/ConteinerRight'
import FormResult from '../components/FormResult/FormResultMui/FormResult'

const AutoTestsPage = () => {
	const [data, setData] = useState()

	console.log(data ? JSON.stringify(data) : null)

	return (
		<>
			<ContainerLeft>
				<AutoTestsForm setData={setData} />
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

export default AutoTestsPage

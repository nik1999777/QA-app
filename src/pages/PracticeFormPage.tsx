import { useState } from 'react'
import ContainerLeft from '../components/Containers/ContainerLeft/ContainerLeft'
import ContainerRight from '../components/Containers/ContainerRight/ConteinerRight'
import PracticeForm from '../components/PracticeForm/PracticeForm/PracticeForm'
import FormResult from '../components/FormResult/FormResultMui/FormResult'

const PracticeFormPage = () => {
	const [data, setData] = useState()

	// console.log(data ? JSON.stringify(data) : null)

	return (
		<>
			<ContainerLeft>
				<PracticeForm setData={setData} />
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

export default PracticeFormPage

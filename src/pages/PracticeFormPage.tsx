import { useState } from 'react'
import ContainerLeft from '../components/Containers/ContainerLeft/ContainerLeft'
import ContainerRight from '../components/Containers/ContainerRight/ConteinerRight'
import FormResult from '../components/FormResult/FormResult'
import PracticeForm from '../components/PracticeForm/FormMain/FormMain'
import Box from '../views/Common/Box/Box'

const PracticeFormPage = () => {
	const [data, setData] = useState()

	return (
		<>
			<ContainerLeft>
				<PracticeForm setData={setData} />
			</ContainerLeft>
			<ContainerRight>
				<Box>{data && <FormResult data={data} />}</Box>
			</ContainerRight>
		</>
	)
}

export default PracticeFormPage

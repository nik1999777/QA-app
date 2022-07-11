import { useState } from 'react'
import ContainerLeft from '../components/Containers/ContainerLeft/ContainerLeft'
import ContainerRight from '../components/Containers/ContainerRight/ConteinerRight'
import FormResult from '../components/FormResult/FormResult'
import FormMain from '../components/PracticeForm/FormMain/FormMain'
import Box from '../views/Common/Box/Box'

const PracticeFormPage: React.FC = () => {
	const [data, setData] = useState()

	return (
		<>
			<ContainerLeft>
				<FormMain setData={setData} />
			</ContainerLeft>
			<ContainerRight>
				<Box>{data && <FormResult data={data} />}</Box>
			</ContainerRight>
		</>
	)
}

export default PracticeFormPage

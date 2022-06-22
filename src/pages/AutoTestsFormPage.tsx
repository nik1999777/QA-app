import { useState } from 'react'
import AutoTestsForm from '../components/AutoTestsForm/AutoTestsForm/AutoTestsForm'
import AutoTestsRight from '../components/AutoTestsForm/AutoTestsRight/AutoTestsRight'
import ContainerLeft from '../components/Containers/ContainerLeft/ContainerLeft'
import ContainerRight from '../components/Containers/ContainerRight/ConteinerRight'
import AutoTestsResult from '../components/AutoTestsForm/AutoTestsResult/AutoTestsResult'

const AutoTestsFormPage = () => {
	const [data, setData] = useState(undefined)

	return (
		<>
			<ContainerLeft>
				<AutoTestsForm setData={setData} />
			</ContainerLeft>
			<ContainerRight>
				<AutoTestsRight />
				<div
					style={{
						padding: '20px',
					}}
				>
					{data ? (
						<AutoTestsResult data={data} />
					) : (
						<div
							style={{
								color: 'white',
								marginTop: '70px',
								fontSize: '25px',
								textAlign: 'center',
							}}
						>
							Please enter your data and submit
						</div>
					)}
				</div>
			</ContainerRight>
		</>
	)
}

export default AutoTestsFormPage

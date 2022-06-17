import { Divider } from 'antd'
import { useState } from 'react'
import AutoTestsForm from '../components/AutoTestsForm/AutoTestsForm/AutoTestsForm'
import ContainerLeft from '../components/Containers/ContainerLeft/ContainerLeft'
import ContainerRight from '../components/Containers/ContainerRight/ConteinerRight'
import FormResultAnt from '../components/FormResult/FormResultAnt/FormResultAnt'

const AutoTestsPage = () => {
	const [data, setData] = useState(undefined)

	console.log(data)

	return (
		<>
			<ContainerLeft>
				<AutoTestsForm setData={setData} />
			</ContainerLeft>
			<ContainerRight>
				<p style={{ color: 'white' }}>Result</p>
				<p style={{ color: 'white' }}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
					eligendi suscipit esse, quibusdam labore autem aspernatur? Soluta qui
					fugiat officia accusantium autem, odit explicabo itaque. Deleniti
					repellendus obcaecati alias eaque?
				</p>
				<Divider />
				{data ? (
					<FormResultAnt data={data} />
				) : (
					<div style={{ color: 'white' }}>
						Please enter your data and submit
					</div>
				)}
			</ContainerRight>
		</>
	)
}

export default AutoTestsPage

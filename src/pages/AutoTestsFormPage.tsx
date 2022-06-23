import { useState } from 'react'
import AutoTestsForm from '../components/AutoTestsForm/AutoTestsForm/AutoTestsForm'
import AutoTestsRight from '../components/AutoTestsForm/AutoTestsRight/AutoTestsRight'
import ContainerLeft from '../components/Containers/ContainerLeft/ContainerLeft'
import ContainerRight from '../components/Containers/ContainerRight/ConteinerRight'
import FormResult from '../components/FormResult/FormResult'

import { Tabs } from 'antd'

const { TabPane } = Tabs

const AutoTestsFormPage = () => {
	const [data, setData] = useState(undefined)

	return (
		<>
			<ContainerLeft>
				<AutoTestsForm setData={setData} />
			</ContainerLeft>
			<ContainerRight>
				<Tabs defaultActiveKey='2' type='card'>
					<TabPane tab='Result Form' key='1'>
						{data && <FormResult data={data} />}
					</TabPane>
					<TabPane tab='Documentation' key='2'>
						<AutoTestsRight />
					</TabPane>
					<TabPane tab='Console output' key='3'>
						<p>Content of Tab Pane 3</p>
						<p>Content of Tab Pane 3</p>
						<p>Content of Tab Pane 3</p>
					</TabPane>
				</Tabs>
			</ContainerRight>
		</>
	)
}

export default AutoTestsFormPage

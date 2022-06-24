import { Tabs } from 'antd'
import { useState } from 'react'
import AutoTestsForm from '../components/AutoTestsForm/AutoTestsForm/AutoTestsForm'
import AutoTestsRight from '../components/AutoTestsForm/AutoTestsRight/AutoTestsRight'
import CodeEditor from '../components/CodeEditor/CodeEditor'
import ContainerLeft from '../components/Containers/ContainerLeft/ContainerLeft'
import ContainerRight from '../components/Containers/ContainerRight/ConteinerRight'
import FormResult from '../components/FormResult/FormResult'
import FormTree from '../components/Tree/Tree'

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
					{/* <TabPane tab='Result Form' key='1'>
						{data && <FormResult data={data} />}
					</TabPane> */}
					<TabPane tab='Documentation' key='2'>
						<AutoTestsRight />
					</TabPane>
					<TabPane tab='Console output' key='3'>
						<FormTree />
						<CodeEditor />
					</TabPane>
				</Tabs>
			</ContainerRight>
		</>
	)
}

export default AutoTestsFormPage

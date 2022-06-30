import { Tabs } from 'antd'
import Form from '../components/AutoTestsForm/Form/Form'
import FormCode from '../components/AutoTestsForm/FormCode/FormCode'
import FormTitles from '../components/AutoTestsForm/FormTitles/FormTitles'
import FormTreeCode from '../components/AutoTestsForm/FormTreeCode/FormTreeCode'
import ContainerLeft from '../components/Containers/ContainerLeft/ContainerLeft'
import ContainerRight from '../components/Containers/ContainerRight/ConteinerRight'
import { StompSessionProvider } from 'react-stomp-hooks'
import { Subscribing } from '../services/Subscribing'

const { TabPane } = Tabs

const AutoTestsFormPage: React.FC = () => {
	return (
		<StompSessionProvider
			url={'http://localhost:8080/ws'}
			// url={'https://api.autotests.cloud'}
		>
			<ContainerLeft>
				<Form />
			</ContainerLeft>
			<ContainerRight>
				<Tabs defaultActiveKey='2' type='card'>
					<TabPane tab='Documentation' key='2'>
						<FormTitles />
					</TabPane>
					<TabPane tab='Console output' key='3'>
						<FormTreeCode />
						<Subscribing />
					</TabPane>
				</Tabs>
			</ContainerRight>
		</StompSessionProvider>
	)
}

export default AutoTestsFormPage

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage'
import AutoTestsFormPage from './pages/AutoTestsFormPage'
import PracticeFormPage from './pages/PracticeFormPage'
import useWebSocket, { ReadyState } from 'react-use-websocket'

import './styles/index.scss'

const App: React.FC = () => {
	const { sendMessage, lastMessage, readyState } = useWebSocket(
		'wss://demo.piesocket.com/v3/channel_1?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self'
	)

	// useEffect(() => {
	// 	if (lastMessage !== null) {
	// 	}
	// }, [lastMessage])

	const connectionStatus = {
		[ReadyState.CONNECTING]: 'Connecting',
		[ReadyState.OPEN]: 'Open',
		[ReadyState.CLOSING]: 'Closing',
		[ReadyState.CLOSED]: 'Closed',
		[ReadyState.UNINSTANTIATED]: 'Uninstantiated',
	}[readyState]

	return (
		<Routes>
			<Route
				path='/'
				element={
					<Layout
						connectionStatus={connectionStatus}
						lastMessage={lastMessage}
					/>
				}
			>
				<Route path='home' element={<HomePage />} />
				<Route index element={<AutoTestsFormPage />} />
				<Route path='form' element={<PracticeFormPage />} />
			</Route>
		</Routes>
	)
}

export default App

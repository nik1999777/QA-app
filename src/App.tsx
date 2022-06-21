import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage'
import TestAutomationPage from './pages/AutoTestsPage'
import FormAntPage from './pages/FormAntPage'

import './styles/index.scss'

const App: React.FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path='autotests' element={<TestAutomationPage />} />
				<Route path='form' element={<FormAntPage />} />
			</Route>
		</Routes>
	)
}

export default App

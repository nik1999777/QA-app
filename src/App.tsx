import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage'
import AutoTestsFormPage from './pages/AutoTestsFormPage'
import PracticeFormPage from './pages/PracticeFormPage'

import './styles/index.scss'

const App: React.FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path='home' element={<HomePage />} />
				<Route index element={<AutoTestsFormPage />} />
				<Route path='form' element={<PracticeFormPage />} />
			</Route>
		</Routes>
	)
}

export default App

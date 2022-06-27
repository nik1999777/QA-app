import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'

import styles from './Layout.module.scss'
import Navbar from '../Navbar/Navbar'

// const Comp1 = ({ message }) => {
//   return <div style={...}>{messaqge}</div>
// }

// const Comp2 = ({ message, type }) => {
//   return <div style={...}>{messaqge}{type}</div>
// }

const Layout = (props: { connectionStatus: string; lastMessage: any }) => {
	const { connectionStatus, lastMessage } = props

	// const renderMessage = () => {
	// 	switch (lastMessage.type) {
	// 		case 'info':
	// 			return <Comp1 message={lastMessage.message} />
	// 		case 'error':
	// 			return (
	// 				<>
	// 					{123}
	// 					{lastMessage.message}
	// 				</>
	// 			)
	// 	}
	// }

	return (
		<>
			<div
				style={{
					position: 'fixed',
					backgroundColor: 'red',
					color: 'white',
					bottom: '15px',
					left: '50%',
					transform: 'translateX(-50%)',
					padding: 20,
					zIndex: 9999999999999,
				}}
			>
				{/* {renderMessage()} */}
				<p>{connectionStatus}</p>
				<code>{JSON.stringify(lastMessage, undefined, 2)}</code>
			</div>
			<Navbar />
			<main className={styles.layout}>
				<Outlet />
			</main>
		</>
	)
}

export default Layout

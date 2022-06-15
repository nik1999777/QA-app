import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'

import styles from './Layout.module.scss'

const Layout = () => {
	return (
		<>
			<Header />
			<main className={styles.layout}>
				<Outlet />
			</main>
		</>
	)
}

export default Layout

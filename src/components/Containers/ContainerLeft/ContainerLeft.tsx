import { Container } from '@mui/system'
import { FC } from 'react'

import styles from './ContentLeftLayout.module.scss'

interface ContainerProps {
	children: JSX.Element | JSX.Element[] | undefined
}

const ContainerLeft: FC<ContainerProps> = ({ children }) => {
	return (
		<div className={styles.content__left}>
			<Container className={styles.content__left_container}>
				{children}
			</Container>
		</div>
	)
}

export default ContainerLeft

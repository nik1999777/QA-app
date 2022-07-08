import { Content } from 'antd/lib/layout/layout'
import { FC } from 'react'
import Box from '../../../views/Common/Box/Box'
import { ContainerProps } from '../types'
import styles from './ContentLeftLayout.module.scss'

const ContainerLeft: FC<ContainerProps> = ({ children }) => {
	return (
		<Box className={styles.content__left}>
			<Content className={styles.content__left_container}>{children}</Content>
		</Box>
	)
}

export default ContainerLeft

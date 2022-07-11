import { Content } from 'antd/lib/layout/layout'
import { FC } from 'react'
import Box from '../../../views/Common/Box/Box'
import { ContainerProps } from '../types'
import styles from './ContentRightLayout.module.scss'

const ContainerRight: FC<ContainerProps> = ({ children }) => {
	return (
		<Box className={styles.content__right}>
			<Content className={styles.content__right_wrapper}>{children}</Content>
		</Box>
	)
}

export default ContainerRight

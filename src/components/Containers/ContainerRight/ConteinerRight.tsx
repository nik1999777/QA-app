import { FC } from 'react'

import styles from './ContentRightLayout.module.scss'

interface ContainerProps {
	children: JSX.Element | JSX.Element[] | undefined
}

const ContainerRight: FC<ContainerProps> = ({ children }) => {
	return (
		<div className={styles.content__right}>
			<div className={styles.content__right_wrapper}>{children}</div>
		</div>
	)
}

export default ContainerRight

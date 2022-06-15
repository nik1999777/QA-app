import { Container } from '@mui/system'
import { LayoutProps } from '../../Layout/types'

import styles from './ContentLeftLayout.module.scss'

const ContainerLeft = ({ children }: LayoutProps) => {
	return (
		<div className={styles.content__left}>
			<Container sx={{ mt: '90px' }}>{children}</Container>
		</div>
	)
}

export default ContainerLeft

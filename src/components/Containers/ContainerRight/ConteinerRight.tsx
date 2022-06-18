import { Container } from '@mui/system'
import { LayoutProps } from '../../Layout/types'

import styles from './ContentRightLayout.module.scss'

const ContainerRight = ({ children }: LayoutProps) => {
	return (
		<div className={styles.content__right}>
			<div className={styles.content__right_wrapper}>{children}</div>
			{/* <Container sx={{ mt: '90px' }}>{children}</Container> */}
		</div>
	)
}

export default ContainerRight

import Box from '../../../../views/Common/Box/Box'
import { IFormSubscribingComponent } from '../types'
import styles from './SubcribingAnyText.module.scss'
import { Typography } from 'antd'

const { Text } = Typography

const SubcribingAnyText: React.FC<IFormSubscribingComponent> = content => {
	return (
		<Box className={styles.box}>
			<Text className={styles.text}>{content.content}</Text>
		</Box>
	)
}

export default SubcribingAnyText

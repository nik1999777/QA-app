import { Typography, Button } from 'antd'
import Box from '../../../../views/Common/Box/Box'
import { IFormSubscribingComponent } from '../types'
import styles from './Jenkins.module.scss'

const { Text } = Typography

export const Jenkins: React.FC<IFormSubscribingComponent> = content => {
	return (
		<Box className={styles.box}>
			<Text className={styles.title}>Jenkins</Text>
			<Button href={content.content} type='link'>
				{content.content}
			</Button>
		</Box>
	)
}

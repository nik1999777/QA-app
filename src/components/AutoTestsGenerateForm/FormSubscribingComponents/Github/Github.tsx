import { Typography, Button } from 'antd'
import Box from '../../../../views/Common/Box/Box'
import { IFormSubscribingComponent } from '../types'

const { Text } = Typography

import styles from './Github.module.scss'

export const Github: React.FC<IFormSubscribingComponent> = content => {
	return (
		<Box className={styles.box}>
			<Text className={styles.title}>Github repository created:</Text>
			<Button href={content.content} type='link'>
				{content.content}
			</Button>
		</Box>
	)
}

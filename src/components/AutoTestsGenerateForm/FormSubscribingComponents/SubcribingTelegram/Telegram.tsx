import { IFormSubscribingComponent } from '../types'
import styles from './Telegram.module.scss'
import { Typography } from 'antd'
import Box from '../../../../views/Common/Box/Box'

const { Text } = Typography

export const Telegram: React.FC<IFormSubscribingComponent> = content => {
	return (
		<>
			<Box className={styles.box}>
				<Text className={styles.title}>Telegram Notification</Text>
			</Box>
			<iframe
				className={styles.iframe}
				src={`https://t.me/${content.content}?embed=1&discussion=1&comments_limit=5&dark=1`}
			></iframe>
		</>
	)
}

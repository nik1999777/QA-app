import { Input } from 'antd'
import Box from '../../../../views/Common/Box/Box'
import { IFormSubscribingComponent } from '../types'
import styles from './AnyText.module.scss'

const { TextArea } = Input

export const AnyText: React.FC<IFormSubscribingComponent> = content => {
	return (
		<Box className={styles.box}>
			<TextArea className={styles.textArea} placeholder={content.content} />
		</Box>
	)
}

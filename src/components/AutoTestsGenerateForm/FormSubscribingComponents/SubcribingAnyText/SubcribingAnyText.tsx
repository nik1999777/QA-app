import { Input } from 'antd'
import Box from '../../../../views/Common/Box/Box'
import { IFormSubscribingComponent } from '../types'
import styles from './SubcribingAnyText.module.scss'

const { TextArea } = Input

const SubcribingAnyText: React.FC<IFormSubscribingComponent> = content => {
	return (
		<Box className={styles.box}>
			<TextArea className={styles.textArea} placeholder={content.content} />
		</Box>
	)
}

export default SubcribingAnyText

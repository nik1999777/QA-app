import { IFormInputProps } from '../types'
import { PlusCircleOutlined } from '@ant-design/icons'
import Ui from '..'
import styles from './ManualTests.module.scss'
import { Typography } from 'antd'

const { Text } = Typography

const InputManualTests: React.FC<IFormInputProps> = ({ control, label }) => {
	return (
		<div className={styles.wrapp}>
			<Text>{label}</Text>
			<div className={styles.wrapper}>
				<div className={styles.border}>
					<Ui.Text control={control} name='title_1' placeholder='title' />
					<Ui.TextArea control={control} name='steps_1' placeholder='steps' />
				</div>
				<div className={styles.border}>
					<Ui.Text control={control} name='title_2' placeholder='title' />
					<Ui.TextArea control={control} name='steps_2' placeholder='steps' />
				</div>
				<div className={styles.border}>
					<Ui.Text control={control} name='title_3' placeholder='title' />
					<Ui.TextArea control={control} name='steps_3' placeholder='steps' />
				</div>
				<PlusCircleOutlined className={styles.icon} />
			</div>
		</div>
	)
}

export default InputManualTests

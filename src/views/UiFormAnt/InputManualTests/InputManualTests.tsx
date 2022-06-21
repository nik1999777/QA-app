import { IFormInputProps } from '../../../types/InputProps'
import { Box } from '@mui/material'
import { PlusCircleOutlined } from '@ant-design/icons'
import Ui from '../../../views/UiFormAnt'

import styles from './InputManualTests.module.scss'
import { Typography } from 'antd'

const { Text } = Typography

const InputManualTests: React.FC<IFormInputProps> = ({ control, label }) => {
	return (
		<div className={styles.wrapp}>
			<Text>{label}</Text>
			<Box className={styles.wrapper}>
				<Box className={styles.border}>
					<Ui.InputText control={control} name='title_1' placeholder='title' />
					<Ui.InputTextArea
						control={control}
						name='steps_1'
						placeholder='steps'
					/>
				</Box>
				<Box className={styles.border}>
					<Ui.InputText control={control} name='title_2' placeholder='title' />
					<Ui.InputTextArea
						control={control}
						name='steps_2'
						placeholder='steps'
					/>
				</Box>
				<Box className={styles.border}>
					<Ui.InputText control={control} name='title_3' placeholder='title' />
					<Ui.InputTextArea
						control={control}
						name='steps_3'
						placeholder='steps'
					/>
				</Box>
				<PlusCircleOutlined className={styles.icon} />
			</Box>
		</div>
	)
}

export default InputManualTests

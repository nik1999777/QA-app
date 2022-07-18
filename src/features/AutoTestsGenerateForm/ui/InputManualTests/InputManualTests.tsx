import { IFormInputProps } from '../../../../shared/ui/Input/Input.types'
import { PlusCircleOutlined } from '@ant-design/icons'
import styles from './InputManualTests.module.scss'
import { Typography } from 'antd'
import { useState } from 'react'
import InputSingleManualTest from './InputSingleManualTest'

const { Text } = Typography

const InputManualTests: React.FC<IFormInputProps> = ({
	control,
	label,
	name,
}) => {
	const [array, setArray] = useState<any>([])

	const handleCreateArticle = () => {
		setArray([...array, { ...array, id: Math.random() }])
	}

	return (
		<div>
			<Text>{label}</Text>
			<div className={styles.wrapper}>
				<InputSingleManualTest control={control} name='1' />
				<InputSingleManualTest control={control} name='2' />
				<InputSingleManualTest control={control} name='3' />
				{array.map((arr: any) => (
					<InputSingleManualTest key={arr.id} control={control} name={name} />
				))}
				<PlusCircleOutlined
					onClick={handleCreateArticle}
					className={styles.icon}
				/>
			</div>
		</div>
	)
}

export default InputManualTests

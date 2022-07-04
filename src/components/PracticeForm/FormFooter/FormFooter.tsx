import { Typography } from 'antd'
import styles from './FormFooter.module.scss'
const { Text } = Typography

const FormFooter: React.FC = () => {
	return (
		<footer className={styles.footer}>
			<Text className={styles.text}>© QA GURU</Text>
		</footer>
	)
}

export default FormFooter

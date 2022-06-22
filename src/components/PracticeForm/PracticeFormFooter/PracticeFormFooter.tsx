import { Typography } from 'antd'
import styles from './PracticeFormFooter.module.scss'
const { Text } = Typography

const Footer: React.FC = () => {
	return (
		<footer className={styles.footer}>
			<Text>© QA GURU</Text>
		</footer>
	)
}

export default Footer

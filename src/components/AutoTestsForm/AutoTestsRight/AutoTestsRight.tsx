import Box from '../../../views/Common/Box/Box'
import { Typography } from 'antd'
const { Text } = Typography

import styles from './AutoTestsRight.module.scss'

const AutoTestsRight = () => {
	return (
		<Box className={styles.wrapper}>
			<Text className={styles.title}>URL</Text>
			<Text className={styles.title}>CODE</Text>
			<Text className={styles.subtitle}>Generate framework code base:</Text>
			<Text className={styles.title}>TESTS</Text>
			<Text className={styles.subtitle}>Generate tests with AI</Text>
			<Text className={styles.subtitle}>Manual Tests</Text>
			<Text className={styles.title}>VISUALIZATION</Text>
			<Text className={styles.subtitle}>Tests results report</Text>
			<Text className={styles.subtitle}>Add attachments</Text>
			<Text className={styles.title}>INFRASTRUCTURE</Text>
			<Text className={styles.subtitle}>Source code (where to store code)</Text>
			<Text className={styles.subtitle}>CI/CD Tool (where to run code)</Text>
			<Text className={styles.subtitle}>Browser type</Text>
			<Text className={styles.subtitle}>Browsers hub</Text>
			<Text className={styles.title}>NOTIFICATIONS</Text>
			<Text className={styles.subtitle}>Add test results notifications</Text>
			<Text className={styles.title}>TEST MANAGEMENT</Text>
			<Text className={styles.subtitle}>Connect with</Text>
		</Box>
	)
}

export default AutoTestsRight

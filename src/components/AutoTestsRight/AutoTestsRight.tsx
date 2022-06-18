import { Divider } from 'antd'

import styles from './AutoTestsRight.module.scss'

const AutoTestsRight = () => {
	return (
		<div className={styles.wrapper}>
			<p className={styles.title}>URL</p>
			<p className={styles.title}>CODE</p>
			<p className={styles.subtitle}>Generate framework code base:</p>
			<p className={styles.title}>Tests</p>
			<p className={styles.subtitle}>Generate tests with AI</p>
			<p className={styles.subtitle}>Manual Tests</p>
			<p className={styles.title}>VISUALIZATION</p>
			<p className={styles.subtitle}>Tests results report</p>
			<p className={styles.subtitle}>Add attachments</p>
			<p className={styles.title}>INFRASTRUCTURE</p>
			<p className={styles.subtitle}>Source code (where to store code)</p>
			<p className={styles.subtitle}>CI/CD Tool (where to run code)</p>
			<p className={styles.subtitle}>Browser type</p>
			<p className={styles.subtitle}>Browsers hub</p>
			<p className={styles.title}>NOTIFICATIONS</p>
			<p className={styles.subtitle}>Add test results notifications</p>
			<p className={styles.title}>TEST MANAGEMENT</p>
			<p className={styles.subtitle}>Connect with</p>
		</div>
	)
}

export default AutoTestsRight

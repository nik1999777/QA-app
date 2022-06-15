import { Typography } from '@mui/material'

import styles from './FormFooter.module.scss'

const Footer: React.FC = () => {
	return (
		<footer className={styles.footer}>
			<Typography textAlign='center'>© QA GURU</Typography>
		</footer>
	)
}

export default Footer

import { Typography } from '@mui/material'
import { logo } from '../../../assets'
import Box from '../../../views/Common/Box/Box'
import NavMenu from '../NavMenu'
import { styleLogo, styleLogoMobile } from '../style'

import styles from './Logo.module.scss'

const Logo = () => {
	return (
		<>
			<Typography
				className={styles.wrapp}
				component='a'
				href='#'
				sx={styleLogo}
			>
				<Box className={styles.box}>
					<img src={logo} />
				</Box>
				Autotests.cloud
			</Typography>

			<Typography
				className={styles.wrapp}
				component='a'
				href='#'
				sx={styleLogoMobile}
			>
				<Box className={styles.box}>
					<img src={logo} />
				</Box>
				Autotests.cloud
			</Typography>
			<NavMenu />
		</>
	)
}

export default Logo

import { Typography } from '@mui/material'
import { logo } from '../../assets'
import NavMenu from './NavMenu'
import { styleLogo, styleLogoMobile } from './style'

const Logo = () => {
	return (
		<>
			<Typography component='a' href='#' sx={styleLogo}>
				<img src={logo} />
			</Typography>

			<Typography component='a' href='#' sx={styleLogoMobile}>
				<img src={logo} />
			</Typography>
			<NavMenu />
		</>
	)
}

export default Logo

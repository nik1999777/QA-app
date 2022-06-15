import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'

import { styleAppBar } from './style'
import GamburgerMenu from './GamburgerMenu'
import Profile from './Profile'
import Logo from './Logo'

const Header = () => {
	return (
		<AppBar sx={styleAppBar} position='fixed'>
			<Container maxWidth={false}>
				<Toolbar disableGutters>
					<GamburgerMenu />
					<Logo />
					<Profile />
				</Toolbar>
			</Container>
		</AppBar>
	)
}
export default Header

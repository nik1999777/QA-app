import { Button } from '@mui/material'
import { Box } from '@mui/system'
import { Link } from 'react-router-dom'
import { styleBoxNavMenu, styleButtonNavMenu } from './style'

const NavMenu = () => {
	const pages = ['home', 'autotests', 'form']
	return (
		<>
			<Box sx={styleBoxNavMenu}>
				{pages.map(page => (
					<Button
						sx={styleButtonNavMenu}
						component={Link}
						to={page === 'autotests' ? `/` : `/${page}`}
						key={page}
					>
						{page}
					</Button>
				))}
			</Box>
		</>
	)
}

export default NavMenu

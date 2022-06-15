import { IconButton, Menu, MenuItem, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import {
	styleBoxMenuGamburger,
	styleGamburger,
	styleMenuGamburger,
} from './style'
import { Link } from 'react-router-dom'

const GamburgerMenu = () => {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget)
	}

	const handleCloseNavMenu = () => {
		setAnchorElNav(null)
	}

	const pages = ['home', 'form', 'ui']
	return (
		<>
			<Box sx={styleBoxMenuGamburger}>
				<IconButton sx={styleGamburger} onClick={handleOpenNavMenu}>
					<MenuIcon />
				</IconButton>
				<Menu
					anchorEl={anchorElNav}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'left',
					}}
					keepMounted
					transformOrigin={{
						vertical: 'top',
						horizontal: 'left',
					}}
					open={Boolean(anchorElNav)}
					onClose={handleCloseNavMenu}
					sx={styleMenuGamburger}
				>
					{pages.map(page => (
						<MenuItem
							component={Link}
							to={page === 'home' ? `/` : `/${page}`}
							key={page}
							onClick={handleCloseNavMenu}
						>
							<Typography textAlign='center'>{page}</Typography>
						</MenuItem>
					))}
				</Menu>
			</Box>
		</>
	)
}

export default GamburgerMenu

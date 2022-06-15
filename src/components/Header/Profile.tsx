import {
	Tooltip,
	IconButton,
	Avatar,
	Menu,
	MenuItem,
	Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Profile = () => {
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
		null
	)

	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget)
	}

	const handleCloseUserMenu = () => {
		setAnchorElUser(null)
	}

	const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

	return (
		<>
			<Box sx={{ flexGrow: 0 }}>
				<Tooltip title='Open settings'>
					<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
						<Avatar alt='' src='' />
					</IconButton>
				</Tooltip>
				<Menu
					sx={{ mt: '45px' }}
					anchorEl={anchorElUser}
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'right',
					}}
					keepMounted
					transformOrigin={{
						vertical: 'top',
						horizontal: 'right',
					}}
					open={Boolean(anchorElUser)}
					onClose={handleCloseUserMenu}
				>
					{settings.map(setting => (
						<MenuItem key={setting} onClick={handleCloseUserMenu}>
							<Typography textAlign='center'>{setting}</Typography>
						</MenuItem>
					))}
				</Menu>
			</Box>
		</>
	)
}

export default Profile

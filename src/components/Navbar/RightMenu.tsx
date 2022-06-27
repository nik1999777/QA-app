import React from 'react'
import { Menu, Avatar } from 'antd'
import { UserOutlined, CodeOutlined, LogoutOutlined } from '@ant-design/icons'

import styles from './Navbar.module.scss'

const menuItems = [
	{
		key: 'user',
		label: 'User',
		icon: <UserOutlined />,
		// type: 'sub2',
		children: [
			{
				key: 'projects',
				label: 'Projects',
				icon: <CodeOutlined />,
			},
			{
				key: 'profile',
				label: 'Profile',
				icon: <UserOutlined />,
			},
			{
				key: 'form',
				label: 'Form',
				icon: <LogoutOutlined />,
			},
		],
	},
]

const RightMenu = ({ mode }: any) => {
	return <Menu mode={mode} items={menuItems}></Menu>
}

export default RightMenu

import React from 'react'
import { Menu } from 'antd'
import { Link, useNavigate } from 'react-router-dom'

const LeftMenu = ({ mode }: any) => {
	const navigate = useNavigate()

	const menuItems = [
		{
			key: 'autotests',
			label: 'Autotests',
			onClick: () => {
				navigate('/')
			},
		},
		{
			key: 'home',
			label: 'Home',
			onClick: () => {
				navigate('/home')
			},
		},
		{
			key: 'form',
			label: 'Form',
			onClick: () => {
				navigate('/form')
			},
		},
	]

	return <Menu items={menuItems} mode={mode}></Menu>
}

export default LeftMenu

import { ReactNode } from 'react'

export interface BoxProps {
	children: JSX.Element | JSX.Element[] | ReactNode
	className?: string
}

import { FC, ReactNode } from 'react'

interface BoxProps {
	children: JSX.Element | JSX.Element[] | ReactNode
	className?: string
}

const Box: FC<BoxProps> = ({ children, ...props }) => {
	return <div {...props}>{children}</div>
}

export default Box

import { BoxProps } from './types'

const Box: React.FC<BoxProps> = ({ children, ...props }) => {
	return <div {...props}>{children}</div>
}

export default Box

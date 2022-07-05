import { Typography, Button } from 'antd'

export const Github = ({ content }: any) => {
	return (
		<div style={{ display: 'flex', alignItems: 'center' }}>
			<Typography style={{ color: 'white' }}>
				Github repository created:
			</Typography>
			<Button href='https://github.com/autotests-cloud/AUTO-1150' type='link'>
				{content}
			</Button>
		</div>
	)
}

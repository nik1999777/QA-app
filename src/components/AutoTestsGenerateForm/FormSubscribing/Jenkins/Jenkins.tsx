import { Typography, Button } from 'antd'

export const Jenkins = ({ content }: any) => {
	return (
		<div style={{ display: 'flex', alignItems: 'center' }}>
			<Typography style={{ color: 'white' }}>Jenkins</Typography>
			<Button href='https://jenkins.autotests.cloud/job/AUTO-1150/' type='link'>
				{content}
			</Button>
		</div>
	)
}

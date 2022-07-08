import { Typography, Button } from 'antd'
import { useEffect, useState } from 'react'
import Box from '../../../../views/Common/Box/Box'
import { IFormSubscribingComponent } from '../types'
import GithubTree from './GithubTree/GithubTree'
import FadeIn from 'react-fade-in'

const { Text } = Typography

import styles from './SubcribingGithub.module.scss'

const SubcribingGithub: React.FC<IFormSubscribingComponent> = content => {
	const [show, setShow] = useState(false)

	useEffect(() => {
		setTimeout(() => setShow(true), 2500)
	}, [content])

	return (
		<>
			<Box className={styles.box}>
				<Text className={styles.title}>Github repository created:</Text>
				<Button href={content.content} type='link'>
					{content.content}
				</Button>
			</Box>
			{show && (
				<FadeIn>
					<GithubTree />
				</FadeIn>
			)}
		</>
	)
}

export default SubcribingGithub

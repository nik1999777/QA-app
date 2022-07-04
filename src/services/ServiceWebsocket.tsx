import { useStompClient, useSubscription } from 'react-stomp-hooks'
import { useEffect, useState } from 'react'

import { create_UUID } from '../utils/StringUtils'
import { Button, Typography } from 'antd'
import serializer from '../utils/serializers/serializer'

const uuid: string = create_UUID()

export const Git = ({ content }: any) => {
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

export const Jenkins = ({ content }: any) => {
	return (
		<div>
			<div>{content}</div>
		</div>
	)
}

export const Telegram = ({ content }: any) => {
	return (
		<iframe
			style={{ width: '100%', height: '650px', marginTop: '200px' }}
			id='telegram-post-autotests_cloud-17'
			src={`https://t.me/${content}?embed=1&discussion=1&comments_limit=5&dark=1`}
		></iframe>
	)
}

export const Subscribing = () => {
	const [messages, setMessages] = useState<any[]>([])

	useSubscription(`/topic/${uuid}`, (messages: any) => {
		setMessages((prevMessages: any) => [
			...prevMessages,
			addSocketEvent(messages.body),
		])
	})

	const addSocketEvent = (message: string) => {
		const { contentType, content } = JSON.parse(message)

		switch (contentType) {
			case 'git':
				return <Git content={content} />
			case 'notification':
				return <Telegram content={content} />
		}
	}

	return (
		<>
			<div>{messages}</div>
		</>
	)
}

export const SendingMessages = ({ data }: any) => {
	const stompClient = useStompClient()

	useEffect(() => {
		if (stompClient) {
			stompClient.publish({
				destination: `/app/orders/${uuid}`,
				body: serializer(data),
			})
		} else {
			//Handle error
		}
	}, [data])

	return (
		<Button style={{ width: '130px', maxWidth: '100%' }} htmlType='submit'>
			Generate
		</Button>
	)
}

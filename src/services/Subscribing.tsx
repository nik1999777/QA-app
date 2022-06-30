import {useStompClient, useSubscription} from 'react-stomp-hooks'
import {useEffect, useState} from 'react'

import { create_UUID } from '../utils/StringUtils'
import {Button} from "antd";

const uuid: string = create_UUID()

export const Subscribing = () => {
	const [lastMessage, setLastMessage] = useState('No message received yet')

	useSubscription(`/topic/${uuid}`, message => setLastMessage(message.body))

	return <div>Last Message: {lastMessage}</div>
}

export const SendingMessages = ({ data }: any) => {
	const stompClient = useStompClient()

	console.log(JSON.stringify(data))

	useEffect(() => {
		if (stompClient) {
			stompClient.publish({
				destination: `/app/orders/${uuid}`,
				body: JSON.stringify(data),
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

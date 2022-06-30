import { useSubscription } from 'react-stomp-hooks'
import { useState } from 'react'

import { create_UUID } from '../utils/StringUtils'

const uuid: string = create_UUID()

export const Subscribing = () => {
	const [lastMessage, setLastMessage] = useState('No message received yet')

	useSubscription(`/topic/${uuid}`, message => setLastMessage(message.body))

	return <div>Last Message: {lastMessage}</div>
}

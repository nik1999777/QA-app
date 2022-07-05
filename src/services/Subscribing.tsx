/* eslint-disable @typescript-eslint/no-explicit-any */
import { IMessage } from '@stomp/stompjs'
import { useState } from 'react'
import { useSubscription } from 'react-stomp-hooks'
import { FormRenderComponents } from '../components/AutoTestsGenerateForm/FormRenderComponents/FormRenderComponents'
import { uuid } from '../utils/StringUtils'

export const Subscribing = () => {
	const [messages, setMessages] = useState<string[]>([])

	useSubscription(`/topic/${uuid}`, (messages: IMessage) => {
		// console.log(messages)
		// console.log(messages.body)
		setMessages((prevMessages: any[]) => [
			...prevMessages,
			FormRenderComponents(messages.body),
		])
	})

	return (
		<>
			<div>{messages}</div>
		</>
	)
}

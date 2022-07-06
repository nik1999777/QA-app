/* eslint-disable @typescript-eslint/no-explicit-any */
import { IMessage } from '@stomp/stompjs'
import { useState } from 'react'
import { useSubscription } from 'react-stomp-hooks'
import { uuid } from '../../../utils/StringUtils'
import { Github } from '../FormSubscribingComponents/Github/Github'
import { Telegram } from '../FormSubscribingComponents/Telegram/Telegram'
import { Jenkins } from '../FormSubscribingComponents/Jenkins/Jenkins'
import { JenkinsLog } from '../FormSubscribingComponents/JenkinsLog/JenkinsLog'
import TreeCode from '../FormSubscribingComponents/TreeCode/TreeCode'
import { AnyText } from '../FormSubscribingComponents/AnyText/AnyText'

export const Subscribing: React.FC = () => {
	const [messages, setMessages] = useState<string[]>([])

	useSubscription(`/topic/${uuid}`, (messages: IMessage) => {
		// console.log(messages)
		// console.log(messages.body)
		setMessages((prevMessages: any[]) => [
			...prevMessages,
			renderSubscribingComponents(messages.body),
		])
	})

	return (
		<>
			{messages.map((message, i) => (
				<div key={`message-${i}`}>{message}</div>
			))}
		</>
	)
}

export const renderSubscribingComponents = (message: string) => {
	const { contentType, content } = JSON.parse(message)

	switch (contentType) {
		case 'git':
			return (
				<>
					<Github content={content} />
					<TreeCode />
				</>
			)
		case 'notification':
			return <Telegram content={content} />
		case 'jenkins':
			return <Jenkins content={content} />
		case 'jenkins_log':
			return <JenkinsLog content={content} />
		case 'text':
			return <AnyText content={content} />
	}
}

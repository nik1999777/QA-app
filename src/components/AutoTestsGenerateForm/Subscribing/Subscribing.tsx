/* eslint-disable @typescript-eslint/no-explicit-any */
import { IMessage } from '@stomp/stompjs'
import { useState } from 'react'
import { useSubscription } from 'react-stomp-hooks'
import { Telegram } from '../FormSubscribingComponents/SubcribingTelegram/Telegram'
import { Jenkins } from '../FormSubscribingComponents/SubcribingJenkins/Jenkins'
import { JenkinsLog } from '../FormSubscribingComponents/SubcribingJenkinsLog/JenkinsLog'
import { uuid } from '../../../utils/stringUtils'
import SubcribingAnyText from '../FormSubscribingComponents/SubcribingAnyText/SubcribingAnyText'
import SubcribingGithub from '../FormSubscribingComponents/SubcribingGithub/SubcribingGithub'
import FadeIn from 'react-fade-in'

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
				<FadeIn key={`message-${i}`}>{message}</FadeIn>
			))}
		</>
	)
}

export const renderSubscribingComponents = (message: string) => {
	const { contentType, content } = JSON.parse(message)

	switch (contentType) {
		case 'git':
			return <SubcribingGithub content={content} />
		case 'jenkins':
			return <Jenkins content={content} />
		case 'jenkins_log':
			return <JenkinsLog content={content} />
		case 'notification':
			return <Telegram content={content} />
		case 'text':
			return <SubcribingAnyText content={content} />
	}
}

import { Github } from '../FormSubscribing/Github/Github'
import { Telegram } from '../FormSubscribing/Telegram/Telegram'
import { Jenkins } from '../FormSubscribing/Jenkins/Jenkins'
import { JenkinsLog } from '../FormSubscribing/JenkinsLog/JenkinsLog'

export const FormRenderComponents = (message: string) => {
	const { contentType, content } = JSON.parse(message)

	switch (contentType) {
		case 'git':
			return <Github key={contentType} content={content} />
		case 'notification':
			return <Telegram key={contentType} content={content} />
		case 'jenkins':
			return <Jenkins key={contentType} content={content} />
		case 'jenkins_log':
			return <JenkinsLog key={contentType} content={content} />
	}
}

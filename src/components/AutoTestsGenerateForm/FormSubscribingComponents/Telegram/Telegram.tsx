import { IFormSubscribingComponent } from '../types'

import styles from './Telegram.module.scss'

export const Telegram: React.FC<IFormSubscribingComponent> = content => {
	return (
		<iframe
			className={styles.iframe}
			src={`https://t.me/${content.content}?embed=1&discussion=1&comments_limit=5&dark=1`}
		></iframe>
	)
}

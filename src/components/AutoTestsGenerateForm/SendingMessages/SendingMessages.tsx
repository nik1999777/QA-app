import { Button } from 'antd'
import { useEffect, useState } from 'react'
import { useStompClient } from 'react-stomp-hooks'
import serializer from '../../../utils/serializers/serializer'
import { uuid } from '../../../utils/StringUtils'
import { ISendingMessages } from './types'

export const SendingMessages: React.FC<ISendingMessages> = ({ data }) => {
	const stompClient = useStompClient()

	const [visible, setVisible] = useState<boolean>(false)

	useEffect(() => {
		setVisible(!visible)

		if (stompClient && data) {
			console.log(serializer(data))
			stompClient.publish({
				destination: `/app/orders/${uuid}`,
				body: serializer(data),
			})
		} else {
			//Handle error
		}
	}, [data])

	return (
		<>
			{visible ? (
				<Button style={{ width: '130px', maxWidth: '100%' }} htmlType='submit'>
					Generate
				</Button>
			) : null}
		</>
	)
}

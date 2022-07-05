import { Button } from 'antd'
import { useEffect, useState } from 'react'
import { useStompClient } from 'react-stomp-hooks'
import serializer from '../utils/serializers/serializer'
import { uuid } from '../utils/StringUtils'

export const SendingMessages = ({ data }: any) => {
	const stompClient = useStompClient()

	const [visible, setVisible] = useState<boolean>(false)

	useEffect(() => {
		setVisible(!visible)

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
		<>
			{visible ? (
				<Button style={{ width: '130px', maxWidth: '100%' }} htmlType='submit'>
					Generate
				</Button>
			) : null}
		</>
	)
}

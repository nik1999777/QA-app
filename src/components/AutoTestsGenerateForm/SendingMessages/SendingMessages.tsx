import { Button } from 'antd'
import { useEffect, useState } from 'react'
import { useStompClient } from 'react-stomp-hooks'
import { uuid } from '../../../utils/StringUtils'
import { ISendingMessages } from './types'
import serializer from "../../../utils/serializers/serializer";

export const SendingMessages: React.FC<ISendingMessages> = ({ data }) => {
	const stompClient = useStompClient()

	const [visible, setVisible] = useState<boolean>(false)

	useEffect(() => {
		setVisible(!visible)

		if (stompClient && data) {
			console.log(serializer(data));
			stompClient.publish({
				destination: `/app/generate/${uuid}`,
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

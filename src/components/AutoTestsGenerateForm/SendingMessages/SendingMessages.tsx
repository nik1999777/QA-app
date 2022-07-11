import { Button } from 'antd'
import { useEffect, useState } from 'react'
import { useStompClient } from 'react-stomp-hooks'
import { ISendingMessages } from './types'
import dataSerialize from '../../../utils/serializer/dataSerialize'
import { uuid } from '../../../utils/stringUtils'

export const SendingMessages: React.FC<ISendingMessages> = ({ data }) => {
	const stompClient = useStompClient()

	const [visible, setVisible] = useState<boolean>(false)

	useEffect(() => {
		setVisible(!visible)

		if (stompClient && data) {
			console.log(dataSerialize(data))
			stompClient.publish({
				destination: `/app/orders/${uuid}`,
				body: dataSerialize(data),
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

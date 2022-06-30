import { Button } from 'antd'
import { useEffect } from 'react'

import { useStompClient } from 'react-stomp-hooks'

import { create_UUID } from '../utils/StringUtils'

const uuid: string = create_UUID()

export const SendingMessages = ({ data }: any) => {
	const stompClient = useStompClient()

	console.log(JSON.stringify(data))

	useEffect(() => {
		if (stompClient) {
			stompClient.publish({
				destination: `/app/orders/${uuid}`,
				body: JSON.stringify(data),
			})
		} else {
			//Handle error
		}
	}, [data])

	return (
		<Button style={{ width: '130px', maxWidth: '100%' }} htmlType='submit'>
			Generate
		</Button>
	)
}

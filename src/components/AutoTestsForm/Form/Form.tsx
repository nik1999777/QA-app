import { useForm, SubmitHandler } from 'react-hook-form'
import React, { useState } from 'react'
import FormViews from '../FormViews/FormViews'
import { defaultValues } from '../defaultValues'
import { Button, Form, Typography } from 'antd'
import Box from '../../../views/Common/Box/Box'

import styles from './Form.module.scss'
import { IFormAutoTestsInput } from './types'
import { SendingMessages } from '../../../services/SendingMessages'

const { Title } = Typography

const AutoTestsForm: React.FC = () => {
	const { handleSubmit, control, reset } = useForm<IFormAutoTestsInput>({
		defaultValues,
	})

	const [data, setData] = useState<any>()

	const onSubmit: SubmitHandler<IFormAutoTestsInput> = data => {
		setData(data)
	}

	return (
		<>
			<Title className={styles.title}>Test automation as a Service</Title>
			<Form onFinish={handleSubmit(onSubmit)}>
				<FormViews control={control} />
				<Box className={styles.wrapper}>
					<SendingMessages data={data} />
					<Button className={styles.wrapper__button} onClick={() => reset()}>
						Reset
					</Button>
				</Box>
			</Form>
		</>
	)
}

export default AutoTestsForm

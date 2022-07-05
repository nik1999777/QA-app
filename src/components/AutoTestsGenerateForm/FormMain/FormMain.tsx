import { useForm, SubmitHandler } from 'react-hook-form'
import React, { useState } from 'react'
import FormViews from '../FormViews/FormViews'
import { defaultValues } from './defaultValues'
import { Form, Typography } from 'antd'
import Box from '../../../views/Common/Box/Box'
import styles from './FormMain.module.scss'
import { IFormAutoTestsInput } from './types'
import { SendingMessages } from '../../../services/SendingMessages'

const { Title } = Typography

const FormMain: React.FC<any> = () => {
	const { handleSubmit, control } = useForm<IFormAutoTestsInput>({
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
				</Box>
			</Form>
		</>
	)
}

export default FormMain

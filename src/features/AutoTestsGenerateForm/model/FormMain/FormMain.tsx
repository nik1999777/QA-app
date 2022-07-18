import { useForm, SubmitHandler } from 'react-hook-form'
import React, { useState } from 'react'
import FormViews from '../../ui/FormViews/FormViews'
import { defaultValues } from '../../config/defaultValues'
import { Form, Typography } from 'antd'
import styles from './FormMain.module.scss'
import { IFormAutoTestsInput } from './FormMain.types'
import { SendingMessages } from '../SendingMessages/SendingMessages'
import FormViews2 from '../../ui/FormViews2/FormViews2'

const { Title } = Typography

const FormMain: React.FC = () => {
	const { handleSubmit, control } = useForm<IFormAutoTestsInput>({
		defaultValues,
	})

	const [data, setData] = useState<IFormAutoTestsInput>()

	const onSubmit: SubmitHandler<IFormAutoTestsInput> = data => {
		setData(data)
	}

	return (
		<>
			<Title className={styles.title}>Test automation as a Service</Title>
			<Form onFinish={handleSubmit(onSubmit)}>
				<FormViews control={control} />
				{/* <FormViews2 control={control} /> */}
				<div className={styles.wrapper}>
					<SendingMessages data={data} />
				</div>
			</Form>
		</>
	)
}

export default FormMain

import { useForm, SubmitHandler } from 'react-hook-form'
import React from 'react'
import AutoTestsFormViews from '../AutoTestsFormViews/AutoTestsFormViews'
import { IFormAutoTestsInput } from '../../../types/InputForm'
import { defaultValues } from '../defaultValues'
import { Button, Form, Typography } from 'antd'
import Box from '../../../views/Common/Box/Box'

import styles from './AutoTestsForm.module.scss'

const { Title } = Typography

const AutoTestsForm: React.FC<any> = ({ setData }) => {
	const {
		handleSubmit,
		control,
		setValue,
		reset,
		formState: { errors },
	} = useForm<IFormAutoTestsInput>({
		defaultValues,
	})

	const onSubmit: SubmitHandler<IFormAutoTestsInput> = data => setData(data)

	return (
		<>
			<Title className={styles.title}>Test automation as a Service</Title>
			<Form onFinish={handleSubmit(onSubmit)}>
				<AutoTestsFormViews
					control={control}
					setValue={setValue}
					errors={errors}
				/>
				<Box className={styles.wrapper}>
					<Button className={styles.wrapper__button} htmlType='submit'>
						Submit
					</Button>
					<Button className={styles.wrapper__button} onClick={() => reset()}>
						Reset
					</Button>
				</Box>
			</Form>
		</>
	)
}

export default AutoTestsForm

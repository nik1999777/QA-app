import { useForm, SubmitHandler } from 'react-hook-form'
import React from 'react'
import { defaultValues } from '../defaultValues'
import PracticeFormViews from '../PracticeFormViews/PracticeFormViews'
import { IFormInput } from '../types'
import { Button, Form, Typography } from 'antd'
import Box from '../../../views/Common/Box/Box'

import styles from './PracticeForm.module.scss'
import Footer from '../PracticeFormFooter/PracticeFormFooter'

const { Title } = Typography

const PracticeForm: React.FC<any> = ({ setData }) => {
	const {
		handleSubmit,
		control,
		setValue,
		reset,
		formState: { errors },
	} = useForm<IFormInput>({
		defaultValues,
	})

	const onSubmit: SubmitHandler<IFormInput> = data => setData(data)

	return (
		<>
			<Title>Practice Form</Title>
			<Form onFinish={handleSubmit(onSubmit)}>
				<PracticeFormViews
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
					<Footer />
				</Box>
			</Form>
		</>
	)
}

export default PracticeForm

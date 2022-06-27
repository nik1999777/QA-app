import { useForm, SubmitHandler } from 'react-hook-form'
import React from 'react'
import { defaultValues } from '../defaultValues'
import PracticeFormViews from '../PracticeFormViews/PracticeFormViews'
import { Button, Form, Typography } from 'antd'
import Box from '../../../views/Common/Box/Box'
import Footer from '../PracticeFormFooter/PracticeFormFooter'

import styles from './PracticeForm.module.scss'
import { IFormPracticeInput } from './types'

const { Title } = Typography

const PracticeForm: React.FC<any> = ({ setData }) => {
	const { handleSubmit, control, reset } = useForm<IFormPracticeInput>({
		defaultValues,
	})

	const onSubmit: SubmitHandler<IFormPracticeInput> = data => setData(data)

	return (
		<>
			<Title>Practice Form</Title>
			<Form onFinish={handleSubmit(onSubmit)}>
				<PracticeFormViews control={control} />
				<Box className={styles.wrapper}>
					<Button className={styles.wrapper__button} htmlType='submit'>
						Generate
					</Button>
					{/*<Button className={styles.wrapper__button} onClick={() => reset()}>*/}
					{/*	Reset*/}
					{/*</Button>*/}
					<Footer />
				</Box>
			</Form>
		</>
	)
}

export default PracticeForm

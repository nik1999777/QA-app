import { useForm, SubmitHandler } from 'react-hook-form'
import React from 'react'
import { defaultValues } from './defaultValues'
import PracticeFormViews from '../FormViews/FormViews'
import { Button, Form, Typography } from 'antd'
import Box from '../../../views/Common/Box/Box'
import FormFooter from '../FormFooter/FormFooter'
import styles from './FormMain.module.scss'
import { IFormMainProps, IFormPracticeInput } from './types'

const { Title } = Typography

const FormMain: React.FC<IFormMainProps> = ({ setData }) => {
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
					{/* <Button className={styles.wrapper__button} onClick={() => reset()}>
						Reset
					</Button> */}
					<FormFooter />
				</Box>
			</Form>
		</>
	)
}

export default FormMain

import { useForm, SubmitHandler } from 'react-hook-form'
import React from 'react'
import AutoTestsFormViews from './AutoTestsFormViews/AutoTestsFormViews'
import { IFormAutoTestsInput } from '../../types/InputForm'
import { defaultValues } from './defaultValues'
import { Typography } from 'antd'

const { Title } = Typography

const Form: React.FC<any> = ({ setData }) => {
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
			<Title>Test automation as a Service</Title>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<div>
						<AutoTestsFormViews
							control={control}
							setValue={setValue}
							errors={errors}
						/>
						<div>
							<button type='submit'>Submit</button>
							<button onClick={() => reset()}>Reset</button>
						</div>
					</div>
				</div>
			</form>
		</>
	)
}

export default Form

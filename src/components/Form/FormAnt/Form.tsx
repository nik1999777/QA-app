import { useForm, SubmitHandler } from 'react-hook-form'
import React from 'react'
import { defaultValues } from '../defaultValues'
import FormViews from './FormViews'
import { IFormInput } from '../../../types/InputForm'

const Form: React.FC<any> = ({ setData }) => {
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
			<div>Test automation as a Service</div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<div>
						<FormViews control={control} setValue={setValue} errors={errors} />
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

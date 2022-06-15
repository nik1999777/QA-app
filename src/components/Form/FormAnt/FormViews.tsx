import React from 'react'
import { IFormViewsProps } from '../../../types/FormViewsProps'
import Ui from '../../../views/UiFormAnt'

const FormViews: React.FC<IFormViewsProps> = ({
	control,
	setValue,
	errors,
}) => {
	return (
		<>
			<Ui.InputText name='firstName' control={control} label='First Name' />
		</>
	)
}

export default FormViews

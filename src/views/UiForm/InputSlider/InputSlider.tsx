import { useEffect, useState } from 'react'
import { Controller } from 'react-hook-form'
import { IFormInputProps } from '../../../types/InputProps'
import FormItem from 'antd/lib/form/FormItem'
import { Slider } from 'antd'

const InputSlider = ({ name, control, setValue, label }: IFormInputProps) => {
	// const [sliderValue, setSliderValue] = useState<number>(30)

	// useEffect(() => {
	// 	if (sliderValue) setValue(name, sliderValue)
	// }, [sliderValue])

	// const handleChange = (_event: Event, newValue: number | number[]) => {
	// 	setSliderValue(newValue as number)
	// }

	return (
		<FormItem label={label}>
			<Controller
				name={name}
				control={control}
				render={({ field: { onChange, value } }) => (
					<Slider onChange={onChange} value={value} defaultValue={30} />
				)}
			/>
		</FormItem>
	)
}

export default InputSlider

// import { Select } from 'antd'
// import FormItem from 'antd/lib/form/FormItem'
// import React, { useState } from 'react'
// import { Controller } from 'react-hook-form'
// import { IFormInputProps } from '../../../types/InputProps'

// const { Option } = Select

// const InputSelect: React.FC<IFormInputProps> = ({
// 	label,
// 	name,
// 	control,
// 	content,
// }) => {
// 	const generateSingleState = (content: any) => {
// 		return content.map((options: any) => (
// 			<Option key={options.state}>{options.state}</Option>
// 		))
// 	}

// 	const generateSingleCity = (content: any) => {
// 		return content.map((options: any) => <Option>{}</Option>)
// 	}

// 	return (
// 		<>
// 			<Controller
// 				control={control}
// 				name={name}
// 				render={({ field: { onChange, value } }) => (
// 					<Select value={value} style={{ width: '30%' }} onChange={onChange}>
// 						{generateSingleState(content)}
// 					</Select>
// 				)}
// 			/>
// 			<Controller
// 				control={control}
// 				name={name}
// 				render={({ field: { onChange, value } }) => (
// 					<Select style={{ width: '30%' }} onChange={onChange}>
// 						{/* {generateSingleCity()} */}
// 					</Select>
// 				)}
// 			/>
// 		</>
// 	)
// }

// export default InputSelect

// import { Select } from 'antd'
// import React, { useState } from 'react'
// import { IFormInputProps } from '../../../types/InputProps'

// const { Option } = Select
// const provinceData = ['Zhejiang', 'Jiangsu']
// const cityData = {
// 	Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
// 	Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
// }

// type CityName = keyof typeof cityData

// const InputSelect: React.FC<IFormInputProps> = ({
// 	name,
// 	label,
// 	control,
// 	content,
// }) => {
// 	const [cities, setCities] = useState(cityData[provinceData[0] as CityName])
// 	const [secondCity, setSecondCity] = useState(
// 		cityData[provinceData[0] as CityName][0]
// 	)

// 	const handleProvinceChange = (value: CityName) => {
// 		setCities(cityData[value])
// 		setSecondCity(cityData[value][0])
// 	}

// 	const onSecondCityChange = (value: CityName) => {
// 		setSecondCity(value)
// 	}

// 	return (
// 		<>
// 			<Select
// 				defaultValue={provinceData[0]}
// 				style={{ width: 120 }}
// 				onChange={handleProvinceChange}
// 			>
// 				{provinceData.map(province => (
// 					<Option key={province}>{province}</Option>
// 				))}
// 			</Select>
// 			<Select
// 				style={{ width: 120 }}
// 				value={secondCity}
// 				onChange={onSecondCityChange}
// 			>
// 				{cities.map((city: any) => (
// 					<Option key={city}>{city}</Option>
// 				))}
// 			</Select>
// 		</>
// 	)
// }

// export default InputSelect

import React from 'react'

const InputSelect = () => {
	return <div>InputSelect</div>
}

export default InputSelect

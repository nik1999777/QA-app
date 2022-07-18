import { Select } from 'antd'
import FormItem from 'antd/lib/form/FormItem'
import React, { useState } from 'react'
import { Controller } from 'react-hook-form'
import { IFormInputProps } from '../Input.types'

import styles from './SelectCascader.module.scss'

const { Option } = Select
const stateData = [
	'Alabama',
	'Alaska',
	'Arizona',
	'California',
	'Colorado',
	'Florida',
]
const cityData = {
	Alabama: ['Jasper', 'Ozark', 'Clanton', 'Florence'],
	Alaska: ['Kodiak', 'Nome', 'Sitka', 'Ketchikan'],
	Arizona: ['Mesa', 'Phoenix', 'Kingman', 'Douglas'],
	California: ['Beverly Hills', 'Los Angeles', 'San Diego', 'San Marino'],
	Colorado: ['Fort Morgan', 'Montrose', 'Greeley', 'Denver'],
	Florida: ['Hollywood', 'Miami', 'Orlando', 'Sanford'],
}

type CityName = keyof typeof cityData

const InputSelectCascader: React.FC<IFormInputProps> = ({
	name,
	label,
	control,
	placeholder,
	setValue,
}) => {
	const [cities, setCities] = useState(cityData[stateData[0] as CityName])
	const [secondCity, setSecondCity] = useState(
		cityData[stateData[0] as CityName][0]
	)

	const handleProvinceChange = (value: CityName) => {
		setCities(cityData[value])
		setSecondCity(cityData[value][0])
	}

	const onSecondCityChange = (value: CityName) => {
		setSecondCity(value)
	}

	return (
		<FormItem label={label}>
			<Controller
				control={control}
				name={name}
				render={() => (
					<div className={styles.box}>
						<Select
							style={{ width: '100%' }}
							onChange={handleProvinceChange}
							placeholder={placeholder}
						>
							{stateData.map(province => (
								<Option key={province}>{province}</Option>
							))}
						</Select>
						<Select
							style={{ width: '100%' }}
							onChange={onSecondCityChange}
							placeholder={placeholder}
						>
							{cities.map((city: any) => (
								<Option key={city}>{city}</Option>
							))}
						</Select>
					</div>
				)}
			/>
		</FormItem>
	)
}

export default InputSelectCascader

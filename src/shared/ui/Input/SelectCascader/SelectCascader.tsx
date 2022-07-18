import { Cascader } from 'antd';
import React, { useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';
import { IFormInputProps } from '../types';

interface Option {
	value: string;
	label: string;
	children?: Option[];
}

const options: Option[] = [
	{
		value: 'zhejiang',
		label: 'Zhejiang',
		children: [
			{
				value: 'hangzhou',
				label: 'Hangzhou',
				children: [
					{
						value: 'xihu',
						label: 'West Lake',
					},
				],
			},
		],
	},
	{
		value: 'jiangsu',
		label: 'Jiangsu',
		children: [
			{
				value: 'nanjing',
				label: 'Nanjing',
				children: [
					{
						value: 'zhonghuamen',
						label: 'Zhong Hua Men',
					},
				],
			},
		],
	},
];


const InputSelectCascader: React.FC<IFormInputProps> = ({
	name,
	setValue,
	control
}) => {
	const [option, setOption] = useState()



	const onChange = (value: any) => {
		setOption(value);
	};
	if (option) { console.log(option[0]) }


	useEffect(() => {
		if (option) setValue(name, option)
	}, [option])


	return (
		<Controller
			control={control}
			name={name}
			render={() => (< Cascader defaultValue={['zhejiang', 'hangzhou', 'xihu']} options={options} onChange={onChange} />)}
		/>
	);
}

export default InputSelectCascader;


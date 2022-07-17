import { Cascader } from 'antd';
import React, { useEffect, useState } from 'react';
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
}) => {
	const [option, setOption] = useState()

	const handleChange = (e: any) => {
		if (e.option.status === 'done') {
			setOption(e.option)
			console.log();
		}
	}

	useEffect(() => {
		if (option) setValue(name, option)
	}, [option])

	return (
		<Cascader
			defaultValue={['zhejiang', 'hangzhou', 'xihu']}
			options={options}
			onChange={handleChange}
		/>
	);
}

export default InputSelectCascader;


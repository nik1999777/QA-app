/* eslint-disable @typescript-eslint/no-explicit-any */
import { Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import Box from '../../views/Common/Box/Box'
import styles from './FormResult.module.scss'
import { IFormResult } from './types'
const { Text } = Typography

const AutoTestsResult: React.FC<IFormResult> = ({ data }) => {
	const arrayData: any[] = Object.entries(data)

	// console.log(arrayData)

	const [linesShown, setLinesShown] = useState(0)

	useEffect(() => {
		if (linesShown < arrayData.length) {
			setTimeout(() => setLinesShown(linesShown + 1), 1000)
		}
	}, [linesShown])

	const generateSingleKeys = () => {
		return arrayData.map((key, index) =>
			index <= linesShown ? (
				<p className={styles.keys} key={key}>
					{key[0]}
				</p>
			) : null
		)
	}

	const generateSingleValues = () => {
		return arrayData.map((value, index) =>
			index <= linesShown ? (
				<p className={styles.keys} key={value}>
					{Array.isArray(value[1])
						? value[1].join(', ')
						: value[0] === 'birthDate'
						? value[1].toLocaleString()
						: value[1]}
				</p>
			) : null
		)
	}

	return (
		<Box className={styles.wrapper}>
			<Text className={styles.title}>Thanks for submitting the form</Text>

			<Box className={styles.result}>
				<Box className={styles.result__keys}>{generateSingleKeys()}</Box>

				<Box className={styles.result__values}>{generateSingleValues()}</Box>
			</Box>
		</Box>
	)
}

export default AutoTestsResult

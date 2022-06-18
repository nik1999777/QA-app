import React, { useEffect, useState } from 'react'

import { IFormInput } from '../../../types/InputForm'

import styles from './FormResultAnt.module.scss'

type IFormResult = {
	data: IFormInput
}

const FormResultAnt: React.FC<IFormResult> = ({ data }) => {
	const arrayData: any[] = Object.entries(data)

	const [linesShown, setLinesShown] = useState(0)

	useEffect(() => {
		if (linesShown < arrayData.length) {
			setTimeout(() => setLinesShown(linesShown + 1), 1000)
		}
	}, [linesShown])

	const generateSingleKeys = () => {
		return arrayData.map((key, index) =>
			index <= linesShown ? (
				<p className={styles.keys} style={{ color: 'white' }} key={key}>
					{key[0]}
				</p>
			) : null
		)
	}

	const generateSingleValues = () => {
		return arrayData.map((value, index) =>
			index <= linesShown ? (
				<p className={styles.keys} style={{ color: 'white' }} key={value}>
					{Array.isArray(value[1]) ? value[1].join(', ') : value[1]}
				</p>
			) : null
		)
	}

	return (
		<>
			<p style={{ color: 'white', textAlign: 'center' }}>
				Thanks for submitting the form
			</p>

			<div className={styles.result}>
				<div className={styles.result__keys}>{generateSingleKeys()}</div>

				<div className={styles.result__values}>{generateSingleValues()}</div>
			</div>
		</>
	)
}

export default FormResultAnt

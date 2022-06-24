import React from 'react'
import Ui from '../../../views/UiForm'
import { IFormViewsProps } from '../../../types/FormViewsProps'
import styles from './AutoTestsFormViews.module.scss'
import Box from '../../../views/Common/Box/Box'
import { Typography } from 'antd'
const { Text } = Typography

import Content from '../../../content'

import { icons } from '../../../assets'
import InputManualTests from '../../../views/UiForm/InputManualTests/InputManualTests'

const renderIcons = (icons: string[]) => {
	return icons.map(icon => <img width={25} key={icon} src={icon} />)
}

const AutoTestsFormViews: React.FC<IFormViewsProps> = ({ control }) => {
	return (
		<Box className={styles.form}>
			<Box>{renderIcons(Object.values(icons))}</Box>
			<Box className={styles.form__wrapper}>
				<Text className={styles.form__wrapper_text}>URL</Text>
				<Ui.InputText
					name='url'
					control={control}
					placeholder='https://your.site'
				/>
			</Box>
			<Box className={styles.form__wrapper}>
				<Text className={styles.form__wrapper_text}>CODE</Text>
				<Ui.InputRadio
					name='code'
					control={control}
					label='Generate framework code base:'
					content={Content.CodeContent.options}
					direction='vertical'
				/>
			</Box>
			<Box className={styles.form__wrapper}>
				<Text className={styles.form__wrapper_text}>TESTS</Text>
				<Box className={styles.wrapp}>
					<Box className={styles.border}>
						<Ui.InputCheckbox
							control={control}
							name='title_check'
							content={Content.TestsTitleContent.options}
						/>
						<Text className={styles.form__wrapper_subtitle}>
							- Open url '' <br /> - Title should be 'All posts in a row / Habr'
						</Text>
					</Box>
					<Box className={styles.border}>
						<Ui.InputCheckbox
							control={control}
							name='console_check'
							content={Content.TestsErrorsContent.options}
						/>
						<Text className={styles.form__wrapper_subtitle}>
							- Open url '' <br /> - Console logs should not contain text
							'SEVERE'
						</Text>
					</Box>
				</Box>

				<InputManualTests
					control={control}
					label='Add manual tests to automate:'
					name={''}
				/>
			</Box>
			<Box className={styles.form__wrapper}>
				<Text className={styles.form__wrapper_text}>VISUALIZATION</Text>
				<Ui.InputCheckbox
					name='allure_reports'
					control={control}
					label='Tests results report'
					content={Content.ResultsReportContent.options}
				/>
				<Ui.InputCheckbox
					name='attachments'
					control={control}
					label='Add attachments'
					content={Content.AttachmentsContent.options}
				/>
			</Box>
			<Box className={styles.form__wrapper}>
				<Text className={styles.form__wrapper_text}>INFRASTRUCTURE</Text>
				<Ui.InputRadio
					name='source_code'
					control={control}
					label='Source code (where to store code)'
					content={Content.SourceCodeContent.options}
				/>
				<Ui.InputRadio
					name='CI_CD_tool'
					control={control}
					label='CI/CD Tool (where to run code)'
					content={Content.CICDToolContent.options}
				/>
				<Ui.InputRadio
					name='browser_type'
					control={control}
					label='Browser type'
					content={Content.BrowserTypeContent.options}
				/>
				<Ui.InputRadio
					name='browsers_hub'
					control={control}
					label='Browsers hub'
					content={Content.BrowsersHubContent.options}
				/>
			</Box>
			<Box className={styles.form__wrapper}>
				<Text className={styles.form__wrapper_text}>NOTIFICATIONS</Text>
				<Ui.InputCheckbox
					name='notification'
					control={control}
					label='Add test results notifications'
					content={Content.NotificationsContent.options}
				/>
			</Box>
			<Box className={styles.form__wrapper}>
				<Text className={styles.form__wrapper_text}>TEST MANAGEMENT</Text>
				<Ui.InputCheckbox
					name='test_management'
					control={control}
					content={Content.TestManagementContent.options}
					label='Connect with'
					direction='vertical'
				/>
			</Box>
		</Box>
	)
}

export default AutoTestsFormViews

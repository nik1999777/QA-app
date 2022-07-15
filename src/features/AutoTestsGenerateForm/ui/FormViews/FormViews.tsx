import React from 'react'
import Ui from '../../../../shared/ui/Input'
import { IAutoFormViewsProps } from './FormViews.types'
import { Typography } from 'antd'
import styles from './FormViews.module.scss'
import Content from '../../config/ContentFormAutoTests'

import { icons } from '../../../../assets'
const { Text } = Typography

const renderIcons = (icons: string[]) => {
	return icons.map(icon => <img width={25} key={icon} src={icon} />)
}

const AutoTestsFormViews: React.FC<IAutoFormViewsProps> = ({ control }) => {
	return (
		<div className={styles.form}>
			<div>{renderIcons(Object.values(icons))}</div>
			<div className={styles.form__wrapper}>
				<Text className={styles.form__wrapper_text}>URL</Text>
				<Ui.Text name='url' control={control} placeholder='https://your.site' />
			</div>
			<div className={styles.form__wrapper}>
				<Text className={styles.form__wrapper_text}>CODE</Text>
				<Ui.Radio
					name='stack'
					control={control}
					label='Generate framework code base:'
					content={Content.CodeContent.options}
					direction='vertical'
				/>
			</div>
			<div className={styles.form__wrapper}>
				<Text className={styles.form__wrapper_text}>TESTS</Text>
				<div className={styles.wrapp}>
					<div className={styles.border}>
						<Ui.Checkbox
							control={control}
							name='title_check'
							content={Content.TestsTitleContent.options}
						/>
						<Text className={styles.form__wrapper_subtitle}>
							- Open url '' <br /> - Title should be 'All posts in a row / Habr'
						</Text>
					</div>
					<div className={styles.border}>
						<Ui.Checkbox
							control={control}
							name='console_check'
							content={Content.TestsErrorsContent.options}
						/>
						<Text className={styles.form__wrapper_subtitle}>
							- Open url '' <br /> - Console logs should not contain text
							'SEVERE'
						</Text>
					</div>
				</div>

				<Ui.ManualTests
					control={control}
					label='Add manual tests to automate:'
					name={''}
				/>
			</div>
			<div className={styles.form__wrapper}>
				<Text className={styles.form__wrapper_text}>VISUALIZATION</Text>
				<Ui.Checkbox
					name='allure_report'
					control={control}
					label='Tests results report'
					content={Content.ResultsReportContent.options}
				/>
				<Ui.Checkbox
					name='attachments'
					control={control}
					label='Add attachments'
					content={Content.AttachmentsContent.options}
				/>
			</div>
			<div className={styles.form__wrapper}>
				<Text className={styles.form__wrapper_text}>INFRASTRUCTURE</Text>
				<Ui.Radio
					name='source_code'
					control={control}
					label='Source code (where to store code)'
					content={Content.SourceCodeContent.options}
				/>
				<Ui.Radio
					name='ci'
					control={control}
					label='CI/CD Tool (where to run code)'
					content={Content.CICDToolContent.options}
				/>
				<Ui.Radio
					name='browser_type'
					control={control}
					label='Browser type'
					content={Content.BrowserTypeContent.options}
				/>
				<Ui.Radio
					name='browsers_hub'
					control={control}
					label='Browsers hub'
					content={Content.BrowsersHubContent.options}
				/>
			</div>
			<div className={styles.form__wrapper}>
				<Text className={styles.form__wrapper_text}>NOTIFICATIONS</Text>
				<Ui.Checkbox
					name='notification'
					control={control}
					label='Add test results notifications'
					content={Content.NotificationsContent.options}
				/>
			</div>
			<div className={styles.form__wrapper}>
				<Text className={styles.form__wrapper_text}>TEST MANAGEMENT</Text>
				<Ui.Checkbox
					name='test_management'
					control={control}
					content={Content.TestManagementContent.options}
					label='Connect with'
					direction='vertical'
				/>
			</div>
		</div>
	)
}

export default AutoTestsFormViews

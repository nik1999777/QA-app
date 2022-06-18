import React from 'react'
import Ui from '../../../views/UiFormAnt'
import { IFormViewsProps } from '../../../types/FormViewsProps'
import styles from './AutoTestsFormViews.module.scss'
import { PlusCircleOutlined } from '@ant-design/icons'

import Content from '../../../content'

import { icons } from '../../../assets'

const renderIcons = (icons: string[]) => {
	return icons.map(icon => <img width={25} key={icon} src={icon} />)
}

const AutoTestsFormViews: React.FC<IFormViewsProps> = ({ control }) => {
	return (
		<div className={styles.form}>
			<div>{renderIcons(Object.values(icons))}</div>
			<div className={styles.form__wrapper}>
				<p className={styles.form__wrapper_text}>URL</p>
				<Ui.InputText
					name='url'
					control={control}
					placeholder='https://your.site'
				/>
			</div>
			<div className={styles.form__wrapper}>
				<p className={styles.form__wrapper_text}>CODE</p>
				<Ui.InputRadio
					name='code'
					control={control}
					label='Generate framework code base:'
					content={Content.CodeContent.options}
					direction='vertical'
				/>
			</div>
			<div className={styles.form__wrapper}>
				<p className={styles.form__wrapper_text}>TESTS</p>
				<div className={styles.border}>
					<Ui.InputCheckbox
						control={control}
						name='title_check'
						content={Content.TestsTitleContent.options}
						label='Generate tests with AI'
					/>
					<p className={styles.form__wrapper_subtitle}>
						- Open url '' <br /> - Title should be 'All posts in a row / Habr'
					</p>
				</div>
				<br />
				<div className={styles.border}>
					<Ui.InputCheckbox
						control={control}
						name='console_check'
						content={Content.TestsErrorsContent.options}
					/>
					<p className={styles.form__wrapper_subtitle}>
						- Open url '' <br /> - Console logs should not contain text 'SEVERE'
					</p>
				</div>
				<p>Add manual tests to automate:</p>
				<div className={styles.form__wrapper_wrapp}>
					<div className={styles.border}>
						<Ui.InputText
							control={control}
							name='title_1'
							placeholder='title'
						/>
						<Ui.InputTextArea
							control={control}
							name='steps_1'
							placeholder='steps'
						/>
					</div>
					<div className={styles.border}>
						<Ui.InputText
							control={control}
							name='title_2'
							placeholder='title'
						/>
						<Ui.InputTextArea
							control={control}
							name='steps_2'
							placeholder='steps'
						/>
					</div>
					<div className={styles.border}>
						<Ui.InputText
							control={control}
							name='title_3'
							placeholder='title'
						/>
						<Ui.InputTextArea
							control={control}
							name='steps_3'
							placeholder='steps'
						/>
					</div>
					<PlusCircleOutlined className={styles.icon} />
				</div>
			</div>
			<div className={styles.form__wrapper}>
				<p className={styles.form__wrapper_text}>VISUALIZATION</p>
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
			</div>
			<div className={styles.form__wrapper}>
				<p className={styles.form__wrapper_text}>INFRASTRUCTURE</p>
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
			</div>
			<div className={styles.form__wrapper}>
				<p className={styles.form__wrapper_text}>NOTIFICATIONS</p>
				<Ui.InputCheckbox
					name='notification'
					control={control}
					label='Add test results notifications'
					content={Content.NotificationsContent.options}
				/>
			</div>
			<div className={styles.form__wrapper}>
				<p className={styles.form__wrapper_text}>TEST MANAGEMENT</p>
				<Ui.InputCheckbox
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

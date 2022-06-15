import React from 'react'
import Ui from '../../../views/UiFormAnt'
import { IFormViewsProps } from '../../../types/FormViewsProps'
import styles from './AutoTestsFormViews.module.scss'
import { Typography } from 'antd'

import RadioFrameworkContent from '../../../content/ContentFormAutoTests/FrameworkConent.json'
import CheckboxTestsTitleContent from '../../../content/ContentFormAutoTests/TestsTilteContent.json'
import CheckboxTestsErrorsContent from '../../../content/ContentFormAutoTests/TestsErrorsContent.json'
import SourceCodeContent from '../../../content/ContentFormAutoTests/SourceCodeContent.json'
import CICDToolContent from '../../../content/ContentFormAutoTests/CICDToolContent.json'
import BrowserTypeContent from '../../../content/ContentFormAutoTests/BrowserTypeContent.json'
import BrowsersHubContent from '../../../content/ContentFormAutoTests/BrowsersHubContent.json'
import NotificationsContent from '../../../content/ContentFormAutoTests/NotificationsContent.json'
import TestManagementContent from '../../../content/ContentFormAutoTests/TestManagementContent.json'
import ResultsReportContent from '../../../content/ContentFormAutoTests/ResultsReportContent.json'
import AttachmentsContent from '../../../content/ContentFormAutoTests/AttachmentsContent.json'

const { Text } = Typography

const AutoTestsFormViews: React.FC<IFormViewsProps> = ({
	control,
	setValue,
}) => {
	return (
		<div className={styles.form}>
			<div className={styles.form__wrapper}>
				<Text className={styles.form__wrapper_text}>URL</Text>
				<Ui.InputText
					name='URL'
					control={control}
					placeholder='https://your.site'
				/>
			</div>

			<div className={styles.form__wrapper}>
				<Text className={styles.form__wrapper_text}>CODE</Text>
				<Ui.InputRadio
					name='code'
					control={control}
					label='Generate framework code base'
					content={RadioFrameworkContent.options}
				/>
			</div>

			<div className={styles.form__wrapper}>
				<Text className={styles.form__wrapper_text}>TESTS</Text>
				<div className={styles.form__tests}>
					<Ui.InputCheckbox
						control={control}
						setValue={setValue}
						name='titleTest'
						label='Generate some autotests with AI:'
						content={CheckboxTestsTitleContent.options}
					/>
					<Text className={styles.form__wrapper_subtitle}>
						- Open url '' <br /> - Title should be 'All posts in a row / Habr'
					</Text>
					<Ui.InputCheckbox
						control={control}
						setValue={setValue}
						name='consoleErrorsTest'
						content={CheckboxTestsErrorsContent.options}
					/>
					<Text className={styles.form__wrapper_subtitle}>
						- Open url '' <br /> - Console logs should not contain text 'SEVERE'
					</Text>
					<Ui.InputTextArea
						control={control}
						name='manualTests'
						label='Add manual tests to automate:'
					/>
				</div>
			</div>

			<div className={styles.form__wrapper}>
				<Text className={styles.form__wrapper_text}>VISUALIZATION</Text>
				<div className={styles.form__wrapp}>
					<Ui.InputCheckbox
						name='notification'
						control={control}
						label='Tests results report'
						content={ResultsReportContent.options}
					/>
					<Ui.InputCheckbox
						name='notification'
						control={control}
						label='Add attachments'
						content={AttachmentsContent.options}
						display='flex'
					/>
				</div>
			</div>

			<div className={styles.form__wrapper}>
				<Text className={styles.form__wrapper_text}>INFRASTRUCTURE</Text>
				<div className={styles.form__wrapp}>
					<Ui.InputRadio
						name='sourceCode'
						control={control}
						label='Source code (where to store code)'
						content={SourceCodeContent.options}
						display='flex'
					/>
					<Ui.InputRadio
						name='toolCICD'
						control={control}
						label='CI/CD Tool (where to run code)'
						content={CICDToolContent.options}
						display='flex'
					/>
					<Ui.InputRadio
						name='browserType'
						control={control}
						label='Browser type'
						content={BrowserTypeContent.options}
						display='flex'
					/>
					<Ui.InputRadio
						name='browsersHub'
						control={control}
						label='Browsers hub'
						content={BrowsersHubContent.options}
						display='flex'
					/>
				</div>
			</div>

			<div className={styles.form__wrapper}>
				<Text className={styles.form__wrapper_text}>NOTIFICATIONS</Text>
				<div className={styles.form__wrapp}>
					<Ui.InputCheckbox
						name='notification'
						control={control}
						label='Add test results notifications'
						content={NotificationsContent.options}
						display='flex'
					/>
				</div>
			</div>

			<div className={styles.form__wrapper}>
				<Text className={styles.form__wrapper_text}>TEST MANAGEMENT</Text>
				<div className={styles.form__wrapp}>
					<Ui.InputCheckbox
						name='testManagement'
						control={control}
						content={TestManagementContent.options}
					/>
				</div>
			</div>
		</div>
	)
}

export default AutoTestsFormViews

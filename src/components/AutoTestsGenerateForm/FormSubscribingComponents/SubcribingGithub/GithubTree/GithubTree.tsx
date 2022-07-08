import React, { useEffect, useState } from 'react'
import CodeTree from '../../../../CodeTree/CodeTree'
import type { DirectoryTreeProps } from 'antd/lib/tree'
import ContentTree from '../../../../../content/ContentTree'
import CodeContent from '../../../../../content/ContentCode'
import CodeEditor from '../../../../CodeEditor/CodeEditor'
import FadeIn from 'react-fade-in'

const GithubTree: React.FC = () => {
	const onSelect: DirectoryTreeProps['onSelect'] = (keys, info) => {
		if (info.node.isLeaf === true) {
			setTitle(info.node.title)
		}
	}

	const [title, setTitle] = useState<unknown>()
	const [show, setShow] = useState(false)

	useEffect(() => {
		setTimeout(() => setShow(true), 2500)
	}, [title])

	const renderCodeComponents = () => {
		switch (title) {
			case 'App.java':
				return <CodeEditor code={CodeContent.AppContent} />
			case 'AppConfig.java':
				return <CodeEditor code={CodeContent.AppConfigContent} />
			case 'Project.java':
				return <CodeEditor code={CodeContent.ProjectContent} />
			case 'ProjectConfig.java':
				return <CodeEditor code={CodeContent.ProjectConfigContent} />
			case 'CssXpathExamples.java':
				return <CodeEditor code={CodeContent.CssXpathExamplesContent} />
			case 'SelenideSnippets.java':
				return <CodeEditor code={CodeContent.SelenideSnippetsContent} />
			case 'AllureAttachments.java':
				return <CodeEditor code={CodeContent.AllureAttachmentsContent} />
			case 'AllureRestAssuredFilter.java':
				return <CodeEditor code={CodeContent.AllureRestAssuredFilterContent} />
			case 'DriverSettings.java':
				return <CodeEditor code={CodeContent.DriverSettingsContent} />
			case 'DriverUtils.java':
				return <CodeEditor code={CodeContent.DriverUtilsContent} />
			case 'LoginTests.java':
				return <CodeEditor code={CodeContent.LoginTestsContent} />
			case 'GeneratedTests.java':
				return <CodeEditor code={CodeContent.GeneratedTestsContent} />
			case 'TestBase.java':
				return <CodeEditor code={CodeContent.TestBaseContent} />
			default:
				return <CodeEditor code={CodeContent.GeneratedTestsContent} />
		}
	}

	return (
		<>
			<CodeTree
				onSelect={onSelect}
				treeData={ContentTree.TreeDataContent}
				defaultExpandedKeys={['0-0-0', '0-0-0-3']}
				defaultSelectedKeys={['0-0-0-3-1']}
			/>
			{show && <FadeIn>{renderCodeComponents()}</FadeIn>}
		</>
	)
}

export default GithubTree

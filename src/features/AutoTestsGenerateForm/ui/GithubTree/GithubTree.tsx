import React, { useEffect, useState } from 'react'
import CodeTree from '../../../../shared/ui/CodeTree/CodeTree'
import type { DirectoryTreeProps } from 'antd/lib/tree'
import ContentTree from '../../config/ContentGithubTree'
import CodeContent from '../../config/ContentGithubCode'
import CodeEditor from '../../../../shared/ui/CodeEditor/CodeEditor'
import FadeIn from 'react-fade-in'
import styles from './GithubTree.module.scss'
import { NodeCollapseOutlined, NodeExpandOutlined } from '@ant-design/icons'
import cn from 'classnames'

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

	const [code, setCode] = useState(false)
	const [tree, setTree] = useState(false)

	return (
		<>
			<div className={styles.wrapper}>
				<div
					className={cn(
						styles.tree,
						{ [styles.tree_active]: code },
						{ [styles.tree_active2]: tree }
					)}
				>
					<div className={styles.wrapp}>
						<CodeTree
							onSelect={onSelect}
							treeData={ContentTree.TreeDataContent}
							defaultExpandedKeys={['0-0-0', '0-0-0-3']}
							defaultSelectedKeys={['0-0-0-3-1']}
						/>
						<NodeExpandOutlined
							className={styles.icon}
							onClick={() => setTree(!tree)}
						/>
					</div>
				</div>
				<div
					className={cn(
						styles.code,
						{ [styles.code_active]: code },
						{ [styles.code_active2]: tree }
					)}
				>
					<div className={styles.wrapp}>
						{show && <FadeIn>{renderCodeComponents()}</FadeIn>}
						<NodeCollapseOutlined
							className={styles.icon2}
							onClick={() => setCode(!code)}
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default GithubTree

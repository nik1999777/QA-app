import React from 'react'
import CodeTree from '../../CodeTree/CodeTree'
import type { DirectoryTreeProps, TreeProps } from 'antd/lib/tree'
import ContentTree from '../../../content/ContentTree'
import CodeEditor from '../../CodeEditor/CodeEditor'
import CodeContent from '../../../content/ContentCode'

const FormTreeCode = () => {
	const onSelect: DirectoryTreeProps['onSelect'] = (keys, info) => {
		console.log(info.node.title)
		switch (info.node.title) {
			case 'App.java':
				return <CodeEditor code={CodeContent.AppContent} />
			case 'AppConfig.java':
				return <CodeEditor code={CodeContent.AppConfigContent} />
		}
	}

	return (
		<>
			<CodeTree
				onSelect={onSelect}
				treeData={ContentTree.TreeDataContent}
				defaultExpandedKeys={['0-0-0', '0-0-0-3']}
			/>
		</>
	)
}

export default FormTreeCode

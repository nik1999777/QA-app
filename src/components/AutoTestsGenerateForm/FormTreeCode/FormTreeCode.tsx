import React, { useState } from 'react'
import CodeTree from '../../CodeTree/CodeTree'
import type { DirectoryTreeProps, TreeProps } from 'antd/lib/tree'
import ContentTree from '../../../content/ContentTree'
import CodeEditor from '../../CodeEditor/CodeEditor'
import CodeContent from '../../../content/ContentCode'

const FormTreeCode = () => {
	// const [code, setCode] = useState<any>()

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
			{/* <div>{code}</div> */}
		</>
	)
}

export default FormTreeCode

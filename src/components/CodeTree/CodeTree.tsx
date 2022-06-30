import { Tree } from 'antd'
import React from 'react'

const { DirectoryTree } = Tree

import styles from './CodeTree.module.scss'

const CodeTree: React.FC<any> = ({
	treeData,
	defaultExpandedKeys,
	onSelect,
}) => {
	return (
		<DirectoryTree
			multiple
			defaultExpandedKeys={defaultExpandedKeys}
			onSelect={onSelect}
			treeData={treeData}
			className={styles.tree}
		/>
	)
}

export default CodeTree

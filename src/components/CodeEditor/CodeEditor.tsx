import { useEffect, useRef } from 'react'
import { useCodeMirror } from '@uiw/react-codemirror'
import { java } from '@codemirror/lang-java'
import { darcula } from '@uiw/codemirror-theme-darcula'

const CodeEditor = ({ code }: any) => {
	const editor = useRef<any>()
	const { setContainer } = useCodeMirror({
		container: editor.current,
		extensions: [java(), darcula],
		value: code,
	})

	useEffect(() => {
		if (editor.current) {
			setContainer(editor.current)
		}
	}, [editor.current])

	return <div ref={editor} />
}

export default CodeEditor

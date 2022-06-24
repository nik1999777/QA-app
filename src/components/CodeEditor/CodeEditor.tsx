import { useEffect, useRef } from 'react'
import { useCodeMirror } from '@uiw/react-codemirror'
import { java } from '@codemirror/lang-java'
import { darcula } from '@uiw/codemirror-theme-darcula'

const code = `package cloud.autotests.config;

import org.aeonbits.owner.ConfigFactory;

public class Project {
    public static ProjectConfig config = ConfigFactory.create(ProjectConfig.class, System.getProperties());

    public static boolean isWebMobile() {
        return !config.browserMobileView().equals("");
    }

    public static boolean isRemoteWebDriver() {
        return !config.remoteDriverUrl().equals("");
    }

    public static boolean isVideoOn() {
        return !config.videoStorage().equals("");
    }
}`

export default function CodeEditor() {
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

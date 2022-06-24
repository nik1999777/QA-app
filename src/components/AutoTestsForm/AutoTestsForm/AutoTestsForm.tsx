import { useForm, SubmitHandler } from 'react-hook-form'
import React from 'react'
import AutoTestsFormViews from '../AutoTestsFormViews/AutoTestsFormViews'
import { defaultValues } from '../defaultValues'
import { Button, Form, Typography } from 'antd'
import Box from '../../../views/Common/Box/Box'

import styles from './AutoTestsForm.module.scss'
import { IFormAutoTestsInput } from '../types'

import SockJS from "./sockjs.min";
// @ts-ignore
import { Stomp } from "./stomp.min";
import { create_UUID } from "./StringUtils";

const { Title } = Typography


// @ts-ignore
let stompClient = null;
let uuid = create_UUID();
function connect() {
	const socket = new SockJS("https://api-dev.autotests.cloud/ws"); // todo add exception
	// const socket = new SockJS("http://localhost:8080/ws"); // todo add exception
	// @ts-ignore
	stompClient = Stomp.over(socket);
	// @ts-ignore
	stompClient.connect({}, function (status) {
		console.log("Connected: " + status);
		// @ts-ignore
		stompClient.subscribe(`/topic/${uuid}`, function (message) {
			console.log("Message: " + message);
			// todo add exception
			addSocketEvent(JSON.parse(message.body));
		});
	});
}


// @ts-ignore
function addSocketEvent(message) {
	let pre = document.createElement("pre");
	pre.setAttribute("data-prefix", message.prefix);

	switch (message.contentType) {
		case "info":
			pre.className = "list-auto flex";
			pre.innerHTML = `<code>${message.content}</code>`;
			break;
		case "generated":
			pre.className = "text-warning flex";
			pre.innerHTML = `<code>${message.content}<a target="_blank" class="green-link" href="${message.url}">${message.urlText}</a></div></code>`;
			break;
		case "launched":
			pre.className = "text-warning flex";
			pre.innerHTML = `<code>${message.content}<a target="_blank" class="green-link" href="${message.url}">${message.urlText}</a> </code> <label class="loader"></label>`;
			break;
		case "finished":
			pre.className = "text-warning flex";
			pre.innerHTML = `<code>${message.content}<a target="_blank" class="green-link" href="${message.url}">${message.urlText}</a></div></code>`;
			// @ts-ignore
			document.querySelector(".loader").remove();
			break;
		case "in progress":
			pre.className = "text-warning flex";
			pre.innerHTML = `<code>${message.content} </code>`;
			break;
		case "can-automate":
			pre.className = "flex";
			pre.innerHTML = `<code>${message.content}</code>`;
			break;
		case "telegram-info":
			pre.className = "flex";
			pre.innerHTML = `<code>${message.content}<a target="_blank" class="blue-link" href="${message.url}">${message.urlText}</a> 👈</code>`;
			break;
		case "telegram-notification":
			pre.className = "flex";
			pre.innerHTML = `<code> </code>`;
			displayNotification(message.content);
			break;
		case "empty":
			pre.className = "list-auto flex";
			pre.innerHTML = `<code> </code>`;
			break;
		case "error":
			pre.className = "text-error flex";
			pre.innerHTML = `<code>${message.content}</code>`;
			break;
	}
}

// @ts-ignore
function displayNotification(messagePath) {
	const iframeBlock = document.querySelector(".iframe-block");
	// @ts-ignore
	iframeBlock.innerHTML = `<iframe id="telegram-post-autotests_cloud-17" class="telegram-iframe w-full h-full h-80"
          src="https://t.me/${messagePath}?embed=1&discussion=1&comments_limit=5&dark=1"></iframe>`;
}

const AutoTestsForm: React.FC<any> = ({ setData }) => {
	connect(); // when

	const {
		handleSubmit,
		control,
		setValue,
		reset,
		formState: { errors },
	} = useForm<IFormAutoTestsInput>({
		defaultValues,
	})

	const onSubmit: SubmitHandler<IFormAutoTestsInput> = data => setData(data)

	return (
		<>
			<Title className={styles.title}>Test automation as a Service</Title>
			<Form onFinish={handleSubmit(onSubmit)}>
				<AutoTestsFormViews
					control={control}
					setValue={setValue}
					errors={errors}
				/>
				<Box className={styles.wrapper}>
					<Button className={styles.wrapper__button} htmlType='submit'>
						Generate
					</Button>
					{/* <Button className={styles.wrapper__button} onClick={() => reset()}>
						Reset
					</Button> */}
				</Box>
			</Form>
		</>
	)
}

export default AutoTestsForm

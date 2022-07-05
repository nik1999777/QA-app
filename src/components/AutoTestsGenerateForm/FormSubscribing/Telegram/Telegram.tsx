export const Telegram = ({ content }: any) => {
	return (
		<iframe
			style={{ width: '100%', height: '650px', marginTop: '200px' }}
			id='telegram-post-autotests_cloud-17'
			src={`https://t.me/${content}?embed=1&discussion=1&comments_limit=5&dark=1`}
		></iframe>
	)
}

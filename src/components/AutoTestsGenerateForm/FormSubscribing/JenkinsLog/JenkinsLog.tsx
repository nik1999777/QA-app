import axios from 'axios'

export const JenkinsLog = ({ content }: any) => {
	axios
		.get(
			'https://translate.google.com/?sl=ru&tl=en&text=%D0%BA%D0%B0%D0%BA%20%D0%B7%D0%B0%D0%B1%D1%80%D0%B0%D1%82%D1%8C%20%D0%BA%D0%BE%D0%BD%D1%82%D0%B5%D0%BD%D1%82%20%D0%BD%D0%B0%20%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B5%20&op=translate'
		)
		.then(function (response) {
			// handle success
			console.log(response)
		})
	return <div>Hello</div>
}

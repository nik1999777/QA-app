import { Button, InputLabel } from '@mui/material'
import { Controller } from 'react-hook-form'
import { IFormInputProps } from '../../../types/InputProps'

const InputFile: React.FC<IFormInputProps> = ({ name, label, control }) => {
	return (
		<>
			<InputLabel>{label}</InputLabel>
			<Controller
				name={name}
				control={control}
				render={({ field: { onChange, value } }) => (
					<Button
						sx={{ maxWidth: '300px' }}
						variant='outlined'
						component='label'
					>
						Upload File
						<input
							name='file'
							value={value}
							onChange={onChange}
							type='file'
							hidden
						/>
					</Button>
				)}
			/>
		</>
	)
}

export default InputFile

// import Dropzone, { IDropzoneProps } from 'react-dropzone-uploader'
// import 'react-dropzone-uploader/dist/styles.css'

// const Standard = () => {
// 	const getUploadParams: IDropzoneProps['getUploadParams'] = () => {
// 		return { url: 'https://httpbin.org/post' }
// 	}

// 	const handleChangeStatus: IDropzoneProps['onChangeStatus'] = (
// 		{ meta },
// 		status
// 	) => {
// 		console.log(status, meta)
// 	}

// 	const handleSubmit: IDropzoneProps['onSubmit'] = (files, allFiles) => {
// 		console.log(files.map(f => f.meta))
// 		allFiles.forEach(f => f.remove())
// 	}

// 	return (
// 		<Dropzone
// 			getUploadParams={getUploadParams}
// 			onChangeStatus={handleChangeStatus}
// 			onSubmit={handleSubmit}
// 			styles={{ dropzone: { minHeight: 120, maxHeight: 250 } }}
// 		/>
// 	)
// }

// export default Standard

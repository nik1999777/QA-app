import React from "react";
import { IFormInputProps } from "../types"
import { Controller } from 'react-hook-form'
import FormItem from 'antd/lib/form/FormItem'
import { Button, Upload } from "antd";
import { UploadOutlined } from '@ant-design/icons';

const InputFile: React.FC<IFormInputProps> = ({ control, name }) => {

  return (
    <FormItem>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <Upload
            action="http://localhost:6000/blahblah"
          >
            <Button icon={<UploadOutlined onChange={onChange} value={value} />}>Click to Upload</Button>
          </Upload>
        )} />
    </FormItem>
  )
}


export default InputFile;

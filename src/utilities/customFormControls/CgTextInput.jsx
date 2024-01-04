import { useField } from 'formik'
import React from 'react'
import { FormField, Label } from 'semantic-ui-react';

export default function CgTextInput({...props}) {
    //console.log(props);
    //reflect api
    const [field,meta] = useField(props)
    //console.log(meta);
  return (
    <div>
        <FormField error={meta.touched && !!meta.error}>
            <input style={{marginTop:"2em"}} {...field} {...props}/>
            {meta.touched && !!meta.error ? (
                <Label pointing basic color="red" content={meta.error}></Label>
            ):null}
        </FormField>
    </div>
  )
}

import TextField from '@mui/material/TextField'
import * as React from 'react'
import { Formik, Form } from 'formik'
import Button from '@mui/material/Button'

interface Values {
  firstName: string
}

interface Props {
  onSubmit: (values: Values) => void
}

export const MyForm: React.FC<Props> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ firstName: '' }}
      onSubmit={(values) => {
        onSubmit(values)
      }}
    >
      {({ values, handleChange, handleBlur }) => (
        <Form>
          <TextField
            placeholder="First Name"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <pre>{JSON.stringify(values, null)}</pre>
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  )
}

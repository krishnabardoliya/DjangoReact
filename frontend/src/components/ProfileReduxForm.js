import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'

import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import Checkbox from 'material-ui/Checkbox'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'


const validate = values => {
    const errors = {}
    const requiredFields = [
      'firstName',
      'lastName',
      'Age',
      'sex',
      'option1',
      'option2',
      'Color',
    ]
    requiredFields.forEach(field => {
      if (!values[field]) {
        errors[field] = 'Required'
      }
    })
    if (
      values.email &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address'
    }
    return errors
  }
  
  const renderTextField = ({
    input,
    label,
    meta: { touched, error },
    ...custom
  }) => (
    <TextField
      hintText={label}
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
      {...custom}
    />
  )
  
  const renderCheckbox = ({ input, label }) => (
    <Checkbox
      label={label}
      checked={input.value ? true : false}
      onCheck={input.onChange}
    />
  )
  
  const renderRadioGroup = ({ input, ...rest }) => (
    <RadioButtonGroup
      {...input}
      {...rest}
      valueSelected={input.value}
      onChange={(event, value) => input.onChange(value)}
    />
  )
  
  const renderSelectField = ({
    input,
    label,
    meta: { touched, error },
    children,
    ...custom
  }) => (
    <SelectField
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
      onChange={(event, index, value) => input.onChange(value)}
      children={children}
      {...custom}
    />
  )
  
  const MaterialUiForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
      <div className="jumbotron"> 
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            name="firstName"
            component={renderTextField}
            label="First Name"
          />
        </div>
        <div>
          <Field name="lastName" component={renderTextField} label="Last Name" />
        </div>
        <div>
          <Field name="Age" type="number" component={renderTextField} label="Age" />
        </div>
        <div>
          <Field name="sex" component={renderRadioGroup}>
            <RadioButton value="male" label="male" />
            <RadioButton value="female" label="female" />
          </Field>
        </div>
        <div>
          <Field name="option1" component={renderCheckbox} label="option1" />
        </div>
        <div>
          <Field name="option2" component={renderCheckbox} label="option2" />
        </div>
        <div>
        <Field
          name="Color"
          component={renderSelectField}
          label="Favorite Color"
        >
          <MenuItem value="ff0000" primaryText="Red" />
          <MenuItem value="00ff00" primaryText="Green" />
          <MenuItem value="0000ff" primaryText="Blue" />
        </Field>
      </div>
        <div>
          <button type="submit" disabled={pristine || submitting}>
            Submit
          </button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </button>
        </div>
      </form>
      </div>
    )
  }

export default reduxForm({
form: 'MaterialUiForm', // a unique identifier for this form
validate,
})(MaterialUiForm)
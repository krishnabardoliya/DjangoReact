import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'

import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import Checkbox from 'material-ui/Checkbox'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import DatePicker from 'material-ui/DatePicker';
import ColorPicker from 'material-ui-color-picker'

var divStyle = {
  background: "#e2eef6",
  padding: "20px",
  margin: "20px",
  margin_left:"100px",
  fontSize:"15px",
};

var Try ={
  Color:"black",
};


const validate = values => {
    const errors = {}
    const requiredFields = [
      'firstName',
      'lastName',
      'Age',
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
      onChange={(event, value) => input.onChange(value)}
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
      
    />
  )
  

  const ColorPickerInput = ({
    id,
    disabled,
    label,
    name,
    input: {
      value,
      onChange
    }
  }) => (
    <ColorPicker
      id={id}
      disabled={disabled}
      floatingLabelText={label}
      name={name}
      value={value}
      defaultValue={value}
      onChange={onChange}
    />
  )

  


  const renderColorPicker = ({
    input,
    label,
    meta: { touched, error },
    ...custom
  }) => (
    <ColorPicker
      hintText={label}
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
      {...custom}
      onChange={(event, value) => input.onChange(value)}
    />
  )

  


  const renderDatePicker = ({
    input,
    label,
    meta: { touched, error },
    ...custom
  }) => (
    <DatePicker
      errorText={touched && error}
      {...input}
      {...custom}
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
      <div className="jumbotron col-sm-4" style={divStyle}> 
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
          <Field name="gender" component={renderRadioGroup}>
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
        <Field name="date" component={renderDatePicker} hintText="Date"/>
        
        <Field
          name="color"
          component={renderSelectField}
          label="Color"
        >
          <MenuItem value="red" primaryText="Red" />
          <MenuItem value="green" primaryText="Green" />
          <MenuItem value="blue" primaryText="Blue" />
        </Field>
        <Field name="colorp" component={ColorPickerInput} label="colorp" >
        </Field>

        <div>
          <button type="submit" disabled={pristine || submitting}>
            Submit
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
import React from 'react'
import { FormGroup as FormGroupRS, Label, FormText } from 'reactstrap'

const FormGroup = ({ id, label, title, errorMessage, helper, children, floatLabel = false, check = false, required }) => {
  const radioTitle = title ? <h2>{title}</h2> : null
  return (
    <FormGroupRS>
      { radioTitle }
      {helper ? <p className='helpertext'>{helper}</p> : ''}
      <Label for={id} check={check} className={`${floatLabel ? 'has-float-label' : ''} ${required ? 'required' : 'optional'}`}>
        { children }
        <span>{label}</span>
      </Label>
      <FormText>
        {errorMessage}
      </FormText>
    </FormGroupRS>
  )
}

export default FormGroup
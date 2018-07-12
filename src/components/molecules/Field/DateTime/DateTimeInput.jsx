import React from 'react'
import Datetime from 'react-datetime'
import 'react-datetime/css/react-datetime.css'
import { FormGroup } from '../../../atoms'

const DateTimeInput = (props) => {
  const { value, name, onDateTimeChange, ...rest } = props
  return (
    <FormGroup floatLabel {...rest}>
      <Datetime
        defaultValue={value || ''}
        inputProps={{ placeholder: name }}
        timeFormat
        dateFormat
        onChange={onDateTimeChange}
      />
    </FormGroup>
  )
}
export default DateTimeInput
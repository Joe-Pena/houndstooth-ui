import React from 'react'
import { FieldContainer } from '../../molecules'
import { titleize } from '@bowtie/utils'
import FieldGroup from './FieldGroup'

const FieldSingle = (props) => {
  const { name, field, handleChange, location = '', ...rest } = props
  const currentLocation = location === '' ? name : `${location}.${name}`
  if (Array.isArray(field)) {
    return (
      <FieldGroup
        title={name}
        fields={{}}
        location={currentLocation}
        handleChange={handleChange}
        {...rest}
      />
    )
  } else if (field && typeof field === 'object') {
    return (
      <FieldGroup
        title={name}
        fields={field}
        location={currentLocation}
        handleChange={handleChange}
        {...rest}
      />
    )
  } else {
    return (
      <FieldContainer
        key={name}
        name={name}
        label={titleize(name, '_')}
        placeholder={name}
        value={field}
        onChange={(e) => handleChange(currentLocation, e.target.value)}
        {...rest}
      />
    )
  }
}

export default FieldSingle

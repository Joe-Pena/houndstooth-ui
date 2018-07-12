// Containers should include all logic that enhances a component
// this includes any reduce methods, recompose, or middleware.

import { compose } from 'recompose'
import { withEither } from '@bowtie/react-utils'
import { endsWith } from '@bowtie/utils'
import Input from './Input'
import Select from './Select'
import Checkbox from './Checkbox'
import DateTimeContainer from './DateTime'
import ColorPicker from './ColorPicker'
import MultiSelect from './MultiSelect'
import Radio from './Radio'
import DocumentContainer from './Document/DocumentContainer'

// const buttonCondition = ({ type }) => type === 'button' || type === 'submit'

// const nullConditionFn = ({ name }) => !name;

// const isFileConditionFn = ({ type, name }) => endsWith(name, '_path') || type === 'file'
const isColorConditionFn = ({ type, name }) => endsWith(name, '_color') || type === 'color'
const dateTimePickerCondition = ({ type, name }) => endsWith(name, ['_date', '_on', '_time', '_at']) || type === 'date' || type === 'time' || type === 'datetime'
const checkboxCondition = ({ type, name, value }) => typeof value === 'boolean' || endsWith(name, '_boolean') || type === 'checkbox'
const radioCondition = ({ type }) => type === 'radio'
const selectCondition = ({ type }) => type === 'select'
const multiSelectCondition = ({ type }) => type === 'multiselect'
const documentUploadCondition = ({ type }) => type === 'document'

export default compose(
  withEither(selectCondition, Select),
  withEither(checkboxCondition, Checkbox),
  withEither(dateTimePickerCondition, DateTimeContainer),
  withEither(multiSelectCondition, MultiSelect),
  withEither(radioCondition, Radio),
  withEither(isColorConditionFn, ColorPicker),
  // withEither(isFileConditionFn, FileUpload),
  withEither(documentUploadCondition, DocumentContainer)
)(Input)

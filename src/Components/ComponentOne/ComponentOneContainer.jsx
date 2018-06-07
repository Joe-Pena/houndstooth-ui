// Containers should include all logic that enhances a component
// this includes any reduce methods, recompose, or middleware.

import { compose } from 'recompose'
import { withRouter } from 'react-router'
import { withEither, withMaybe } from '../../helpers/HOC_helpers.jsx'
import ComponentOne from './ComponentOne'
import Loading from '../Loading/Loading'

// conditional functions here:
const nullConditionFn = (props) => !props
const loadingConditionFn = (props) => props.isLoading

export default compose(
  withRouter,
  withMaybe(nullConditionFn),
  withEither(loadingConditionFn, Loading)
)(ComponentOne)

import { lifecycle } from 'recompose'

export default lifecycle({
  componentWillMount () {
    const { location, auth, history } = this.props
    if (/access_token|id_token|error/.test(location.hash)) {
      auth.handleAuthentication() ? history.push('/home') : history.push('/login')
    }
  }
})(() => null)

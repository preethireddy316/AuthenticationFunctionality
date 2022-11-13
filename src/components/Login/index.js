// Write your JS code here
import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

const Login = props => {
  const onSubmitSuccess = token => {
    Cookies.set('jwt_token', token, {expiry: 30})
    const {history} = props
    history.replace('/')
  }

  const onFormSubmit = async () => {
    const url = 'https://apis.ccbp.in/login'
    const options = {method: 'POST'}
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      onSubmitSuccess(data.jwt_token)
    }
  }

  const jwtToken = Cookies.get('jwt_token')

  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }
  return (
    <div>
      <h1>Please Login</h1>
      <button type="button" onClick={onFormSubmit}>
        Login with Sample Creds
      </button>
    </div>
  )
}

export default Login

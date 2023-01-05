import Cookies from 'js-cookie'
import './index.css'

const Login = props => {
  const {history} = props
  const onLoginClicked = async () => {
    const url = 'https://apis.ccbp.in/login'
    const userDetails = {
      username: 'rahul',
      password: 'rahul@2021',
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    const jwtToken = data.jwt_token
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  return (
    <div className="login-bg-container">
      <h1>Please Login</h1>
      <button onClick={onLoginClicked} type="button">
        Login with Sample Creds
      </button>
    </div>
  )
}

export default Login

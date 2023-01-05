import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const LogoutButton = props => {
  const {history} = props

  const onLogout = () => {
    Cookies.remove('jwt_token')

    history.replace('/login')
  }
  return (
    <div>
      <button onClick={onLogout} className="log-out-button" type="button">
        Logout
      </button>
    </div>
  )
}

export default withRouter(LogoutButton)

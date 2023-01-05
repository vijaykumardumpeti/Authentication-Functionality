import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

export default class Header extends Component {
  render() {
    return (
      <>
        <ul className="un-ordered-list">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
        </ul>
      </>
    )
  }
}

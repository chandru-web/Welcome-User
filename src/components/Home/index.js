import {Component} from 'react'

import './index.css'

import Login from '../Login'

import Logout from '../Logout'

import Message from '../Message'

class Home extends Component {
  state = {
    isLoggedIn: false,
  }

  toggleLogin = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state

    return (
      <div className="app-container">
        <div className="text-container">
          <Message isLoggedIn={isLoggedIn} />
          {isLoggedIn ? (
            <Login login={this.toggleLogin} />
          ) : (
            <Logout logout={this.toggleLogin} />
          )}
        </div>
      </div>
    )
  }
}
export default Home

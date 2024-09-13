// Write your code here
const Message = props => {
  const {isLoggedIn} = props
  const message = isLoggedIn ? 'Please Login' : 'Welcome User'

  return <h1 className="message">{message}</h1>
}

export default Message

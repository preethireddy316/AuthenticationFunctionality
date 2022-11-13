// Write your JS code here
import {Link} from 'react-router-dom'

const Header = () => (
  <ul>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </ul>
)

export default Header

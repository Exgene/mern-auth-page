import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ authState }) => {
  return !authState ? (
    <div className="navbar">
      <Link to="">Home</Link>
      <Link to="/auth">Login</Link>
    </div>
  ) : (
    /*Change this to the User Profile Page sometime soon!*/
    <div className="navbar">
      <Link to="">Home</Link>
      <Link to="/auth">User</Link>
    </div>
  )
}

export default Navbar

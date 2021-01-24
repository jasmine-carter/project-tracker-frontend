import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {

  return (
    <div class="navBar">
      <div class="links">
      <Link to='/'> Home </Link>
      <Link to='/projects' > Projects </Link>
      <Link to='/projects/new'> Add Project</Link>
      </div>
    </div>
  )
}

export default NavBar

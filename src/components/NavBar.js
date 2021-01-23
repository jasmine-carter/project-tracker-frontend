import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {

  return (
    <div class="navBar">
      <Link to='/projects' class="links"> Projects </Link> {' '}
      <Link to='/projects/new' class="links"> Add Project</Link>
    </div>
  )
}

export default NavBar

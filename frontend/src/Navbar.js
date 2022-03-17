import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
        <ul>
            <li>
                <NavLink exact to="/" className="navlink">Commands</NavLink>
            </li>
            <li>
                <NavLink to="/postcommand" className="navlink">Post Command</NavLink>
            </li>
        </ul>
    </div>
    <br />
    </>
  )
}

export default Navbar
import React from 'react'
import {Link} from 'react-router-dom'
import './preNav.css'

const preNavbar = () => {
  return (
    <div className="preNav">
      <div>
        <Link to={'/'}>Home</Link> <span>|</span>
        <Link to={'/about'}>About</Link> <span>|</span>
        <Link to={'/blogs'}>Blogs</Link> <span>|</span>
        <Link to={'/abcd'}>LifeStyle</Link> <span>|</span>
      </div>
    </div>
  )
}

export default preNavbar
import React from 'react'
import "./_navbarHeading.scss"
function NavbarHeading() {
  return (
    <div className='navbar-heading'>
      <div className="navbar-heading-container">
        <div className="text">
          <span>Visit Us</span>
          <span> Online Support</span>
        </div>
        <div className="icons-nav">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-dribbble"></i>
          <i className="fa-brands fa-behance"></i>
        </div>
      </div>
    </div>
  )
}

export default NavbarHeading
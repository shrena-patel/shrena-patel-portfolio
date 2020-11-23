import React from 'react'

const Nav = () => {
    
  return (
    <>
      <nav>
        
          <div className="hamburger">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
          </div>

          <ul className="nav-links">
              <li className="nav-link link">
                  <a href="#" className="nav-link">Portfolio</a>
              </li>
              <li className="nav-link link">
                  <a href="#" className="nav-link">CV</a>
              </li>
              <li className="link">
                  <a href="#" className="contact-box">Contact</a>
              </li>
          </ul>

      </nav>
    </>
  )
}

export default Nav
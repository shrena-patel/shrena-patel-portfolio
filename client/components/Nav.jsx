import React from 'react'
import { Link } from 'react-router-dom'

class Nav extends React.Component {
    
  render() {

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
                    <Link to='/homepage' replace className="nav-link">Home</Link>
                </li>

                <li className="nav-link link">
                    <Link to='/portfolio' replace className="nav-link">Portfolio</Link>
                </li>
                <li className="nav-link link">
                    <Link to='/cv' className="nav-link">CV</Link>
                </li>
                <li className="link">
                    <Link to='/contact' className="contact-box">Contact</Link>
                </li>
            </ul>
  
        </nav>
     
      </>
    )

  }
}

export default Nav
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
            <li className="nav-link"><a href="#" className="nav-link">Portfolio</a></li>
            <li className="nav-link"><a href="#" className="nav-link">CV</a></li>
            <li><a href="#" className="contact-box">Contact</a></li>
        </ul>
    </nav>

      {/* <header className="header">
          <div className="nav">

                <div className="left-nav-item">
                    <a href="#" className="logo"><p className="logo">SP</p></a>
                </div>

                <div className="right-nav-items">
                    <div className="nav-links">
                        <p className="nav-link">Portfolio</p>
                        <p className="nav-link">CV</p>
                        <p className="nav-link">Contact</p>
                    </div>
                </div>
        
          </div>
      </header> */}

    </>
      )
      }

export default Nav
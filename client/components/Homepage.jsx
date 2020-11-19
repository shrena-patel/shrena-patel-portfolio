import React from 'react'

const Homepage = () => {
  return (
    <>

      <header>
          <div className="nav">

                <div className="left-nav-item">
                    <p className="logo">SP</p>
                </div>

                <div className="right-nav-items">
                    <div className="nav-links">
                        <p className="nav-link">Portfolio</p>
                        <p className="nav-link">CV</p>
                        <p className="nav-link">Contact</p>
                    </div>
                </div>
        
          </div>
      </header>

      <main>
          <div className="hero">
            <div className="left-hero">
                <div className="social-links">
                    <p className="social-icon">G</p>
                    <p className="social-icon">L</p>
                </div>
            </div>

            <div className="right-hero">
                <div className="intro">
                    <p className="intro-text">Hello,</p>
                    <p className="intro-text">I'm Shrena.</p>
                    <p className="intro-text">A web developer based in Wellington.</p>
                </div>

                <div className="hero-link">
                    <p className="portfolio-link">View portfolio</p>
                </div>
            </div>
        </div>

      </main>
      
    </>
  )
}

export default Homepage
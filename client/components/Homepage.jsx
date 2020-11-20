import React from 'react'
import Nav from './Nav'

const Homepage = () => {
    
  return (
    <>

    <header>
        <Nav />
    </header>

      <main>
          <div className="hero">
            <div className="left-hero">
                <div className="social-links">
                    <a href="https://github.com/shrena-patel" target="_blank"><i className="fa fa-github fa-3x social-icon"></i></a>
                    <a href="https://www.linkedin.com/in/shrenapatel/" target="_blank"><i className="fa fa-linkedin fa-3x social-icon"></i></a>
                </div>
            </div>

            <div className="right-hero">
                <div className="intro">
                    <p className="intro-text">Hello.</p>
                    <p className="intro-text">I'm Shrena.</p>
                    <p className="intro-text">A web developer based in Wellington.</p>
                </div>

                <div className="hero-link">
                    <a href="#" className="portfolio-link"><p className="portfolio-link">View portfolio </p></a>
                </div>
            </div>
        </div>

      </main>
      
    </>
  )
}

export default Homepage
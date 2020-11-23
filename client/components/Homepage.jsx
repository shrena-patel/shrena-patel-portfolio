import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

const Homepage = () => {
    
  return (
    <>

  
        <Nav />

        <div className="hero">
            <div className="hero-text">
                <p>Hello.</p>
                <p>I'm Shrena.</p>
                <p>A web developer in Wellington.</p>
                <a href="#" class="hero-button">View my work</a>
            </div>

        </div>
    

      {/* <main>
          <div className="hero">
            <div className="left-hero">
                
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
      <Footer /> */}
      
    </>
  )
}

export default Homepage
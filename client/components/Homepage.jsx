import React from 'react'
import { Link } from 'react-router-dom'


const Homepage = () => {
    
  return (
        <>
            <div className="hero">
                
                <div className="hero-text">
                    <p>Hello.</p>
                    <p>I'm Shrena.</p>
                    <p>A web developer in Wellington.</p>
                    <Link to="/portfolio">
                        <a href="#" class="hero-button">View my work</a>
                    </Link>
                </div>

            </div>
    
        </>
  )
}

export default Homepage
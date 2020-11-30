import React from 'react'
import { Link } from 'react-router-dom'
import Portfolio from './Portfolio'

class Homepage extends React.Component {
    
render () {


  return (
        <>
            <div className="hero">
                
                <div className="hero-text main-text">
                    <p>Hello.</p>
                    <p>I'm Shrena.</p>
                    <p>A web developer in based Wellington.</p>
                    <Link to='/portfolio' className="hero-link">
                        <p className="hero-button">View my work</p>
                    </Link>
                </div>

            </div>
    
        </>
  )
}
}

export default Homepage
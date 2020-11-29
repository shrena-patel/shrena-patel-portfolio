import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Nav from './Nav'
import Homepage from './Homepage'
import About from './About'
import Portfolio from './Portfolio'
import CV from './CV'
import Contact from './Contact'

const App = () => {
    return (
        <>
          <Router>
              <Nav />
              
              {/* <About /> */}
              <Route exact path="/homepage" component={Homepage} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/cv" component={CV} />
              <Route exact path="/contact" component={Contact} />

          </Router>
        </>
    )
}

export default App

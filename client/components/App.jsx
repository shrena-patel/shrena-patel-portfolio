import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import Nav from './Nav'
import Homepage from './Homepage'
import About from './About'

const App = () => {
    return (
        <>
          <Router>
              <Nav />
              <Homepage />
              {/* <About /> */}
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/cv" component={CV} />
              <Route path="/contact" component={contact} />

          </Router>
        </>
    )
}

export default App

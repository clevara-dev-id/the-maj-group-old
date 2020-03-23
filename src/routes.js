import React from 'react'
import { Route } from 'react-router-dom'

import Home from './views/Home'
import About from './views/About'
import NavbarMobile from './views/NavbarMobile'
import { Navbar } from 'react-bootstrap'

const BaseRoute = () => {
    return (
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/navbarmobile" component={NavbarMobile} />
        </div>
    )
}

export default BaseRoute

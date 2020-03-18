import React from 'react'
import { Route } from 'react-router-dom'

import Home from './views/Home'
import About from './views/About'

const BaseRoute = () => {
    return (
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
        </div>
    )
}

export default BaseRoute

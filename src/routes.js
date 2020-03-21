import React from 'react'
import { Route } from 'react-router-dom'

import Home from './views/Home'
import About from './views/About'
import Offers from './views/Offers'
import Occasions from './views/Occasions'

const BaseRoute = () => {
    return (
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/occasions" component={Occasions} />
            <Route exact path="/offers" component={Offers} />
        </div>
    )
}

export default BaseRoute

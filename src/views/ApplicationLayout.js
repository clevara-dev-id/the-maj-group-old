import React from 'react'
import { Footer } from '../components/base_components'

import { OnDesktop, OnMobileAndTablet } from '../constants/Breakpoint'
import MobileFooter from '../components/base_components/MobileFooter/MobileFooter'

import Base from './Base'

export default class ApplicationLayout extends Base {
    render() {
        return (
            <div>
                <header>
                    {/* <NavigationBar /> */}
                </header>

                <div id="content">
                    {this.props.children}
                </div>

                <footer>
                    <OnDesktop>
                        <Footer
                            validated={this.state.footer.validated}
                            onSubmit={this._footer}
                            titleRef={this.footreftitle}
                            nameRef={this.footrefname}
                            emailRef={this.footrefemail}
                        />
                    </OnDesktop>
                    <OnMobileAndTablet>
                        <MobileFooter 
                            validated={this.state.footer.validated}
                            onSubmit={this._footer}
                            titleRef={this.footreftitle}
                            nameRef={this.footrefname}
                            emailRef={this.footrefemail}
                        />
                    </OnMobileAndTablet>
                </footer>
            </div>
        )
    }
}

import React, { Component } from 'react'
import { NavigationBar, Footer, HeadComponent } from '../components/base_components'

import { OnDesktop, OnMobileAndTablet } from '../constants/Breakpoint'
import MobileFooter from '../components/base_components/MobileFooter/MobileFooter'

// tmp img
import HeadBackground from '../Assets/tmp/headBg.png'
import Base from './Base'

export default class ApplicationLayout extends Base {
    render() {
        return (
            <div>
                <header>
                    {/* <NavigationBar /> */}
                    <HeadComponent bg={HeadBackground} text="An Epicurean Journey of the Ages" />
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

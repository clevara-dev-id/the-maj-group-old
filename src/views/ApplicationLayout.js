import React from 'react'
import { connect } from 'react-redux'

import { OnDesktop, OnMobileAndTablet } from '../constants/Breakpoint'
import Base from './Base'
import { Footer, HeadComponent, BreadcrumbHook, FooterSecondary } from '../components/base_components'
import MobileFooter from '../components/base_components/MobileFooter/MobileFooter'

const mapStateToProps = state => (
    {
        head_backgound: state.page.head_background,
        footer: state.page.footer,
    }
)

class connectApplicationLayout extends Base {
    render() {
        return (
            <div>
                <header>
                    {/* <NavigationBar /> */}
                    <HeadComponent bg={this.props.head_backgound.image} text={this.props.head_backgound.text} />
                    <BreadcrumbHook />
                </header>

                <div id="content">
                    {this.props.children}
                </div>

                <footer>
                    <OnDesktop>
                        {
                            this.props.footer === "primary"? (
                                <Footer
                                    validated={this.state.footer.validated}
                                    onSubmit={this._footer}
                                    titleRef={this.footreftitle}
                                    nameRef={this.footrefname}
                                    emailRef={this.footrefemail}
                                />
                            ) : (
                                <FooterSecondary 
                                    validated={this.state.footer.validated}
                                    onSubmit={this._footer}
                                    titleRef={this.footreftitle}
                                    nameRef={this.footrefname}
                                    emailRef={this.footrefemail}
                                />
                            )
                        }
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

const ApplicationLayout = connect(mapStateToProps, null)(connectApplicationLayout) 
export default ApplicationLayout
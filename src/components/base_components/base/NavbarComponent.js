import React, { Component } from 'react'
import styled from 'styled-components'
import { ButtonOutline, ButtonLink, ButtonSearch } from '.'

import LogoImg from '../../../Assets/logo.svg'
import { Navbar, Nav } from 'react-bootstrap'


export class NavigationBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            isScroll:false
        }
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentWillMount(){
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        let lastScroll = 100;
        const currentScroll = window.scrollY;
        if(currentScroll > lastScroll){
            this.setState({isScroll:true});
        }else if(this.state.isScroll){
            this.setState({isScroll:false});
        }
    }

    render(){
        return(
            <>
                <Container id="navbar" bg={this.state.isScroll? "rgba(255, 255, 255, 1);" : "rgba(47, 46, 46, 0.2);"}>
                    <NavHead 
                        visible={this.state.isScroll? "visible": "visible"}
                        margin={this.state.isScroll? "-50px auto -50px auto" : "45px auto 100px auto"}
                        opacity={this.state.isScroll? "0" : "1"}
                        display={this.state.isScroll? "none": "block"}
                    >
                        <Navbar>
                            <Nav className="justify-content-start">
                                <ButtonSearch className="" link="#search" buttonName="Search" />
                                <div style={{width:"120px"}}></div>
                            </Nav>
                            <Navbar.Brand className="mx-auto" href="/"><Img src={LogoImg} alt="Logo The Maj Group" /></Navbar.Brand>
                            <Nav className="justify-content-end">
                                <ButtonLink className="" link="/login" buttonName="Login" />
                                <ButtonOutline className="" link="/booking" buttonName="Book Now" />
                            </Nav>
                        </Navbar>
                    </NavHead>
                    <NavBottom 
                        border={this.state.isScroll? "none": "1px solid #fff"}
                    >
                        <NavBottomContainer>
                            <Nav className="justify-content-center">
                                <Nav.Item>
                                    <ButtonLink inverse={this.state.isScroll? true : false} className="" link="#destination" buttonName="destination" />
                                </Nav.Item>
                                <Nav.Item>
                                    <ButtonLink inverse={this.state.isScroll? true : false} className="" link="#portfolio" buttonName="portfolio" />
                                </Nav.Item>
                                <Nav.Item>
                                    <ButtonLink inverse={this.state.isScroll? true : false} className="" link="#occasions" buttonName="occasions" />
                                </Nav.Item>
                                <Nav.Item>
                                    <ButtonLink inverse={this.state.isScroll? true : false} className="" link="#offers" buttonName="offers" />
                                </Nav.Item>
                                <Nav.Item>
                                    <ButtonLink inverse={this.state.isScroll? true : false} className="" link="#about" buttonName="about" />
                                </Nav.Item>
                            </Nav>
                        </NavBottomContainer>
                    </NavBottom>
                </Container>
            </>
        )
    }
}
const Container = styled.div`
    width:100%;
    height:auto;
    transition: .15s all;
    background:${props=>props.bg};
    position:fixed;
    z-index:9;
`;
const NavHead = styled.div`
    max-width:1337px;
    width:100%;
    margin: 45px auto 100px auto;
    opacity: ${props=>props.opacity};
    transition: .15s all;
    visibility: ${props=>props.visible};
    display: ${props=>props.display};
`;
const NavBottom = styled.div`
    max-width:1337px;
    width: 100%;
    transition: .15s all;
    border-top: ${props=>props.border};
    margin-bottom:34px;
    margin-left:auto;
    margin-right:auto;
    padding-top:25px;
`;
const NavBottomContainer = styled.div`
    max-width:848px;
    width:100%;
    margin-bottom:34px;
    margin-left:auto;
    margin-right:auto;
`;
const Img = styled.img`
    width:100px;
`;
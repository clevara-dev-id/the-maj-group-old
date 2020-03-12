import React, { Component } from 'react'
import styled from 'styled-components'
import { ButtonOutline, ButtonLink, ButtonSearch } from '.'

import LogoImg from '../../../Assets/logo.svg'
import { Navbar, Nav } from 'react-bootstrap'

import './css/navbar.css'


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
                <Container id="navbar" className={this.state.isScroll?"bg-white":"bg-dark-transparent"}>
                    <NavHead 
                        className={this.state.isScroll?"hide":"show"}
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
                        className={this.state.isScroll?"border-none":"border-top-1"}
                    >
                        <NavBottomContainer>
                            <Nav className="justify-content-center">
                                <Nav.Item>
                                    <ButtonLink className={this.state.isScroll?"text-dark":"text-white"} link="#destination" buttonName="destination" />
                                </Nav.Item>
                                <Nav.Item>
                                    <ButtonLink className={this.state.isScroll?"text-dark":"text-white"} link="#portfolio" buttonName="portfolio" />
                                </Nav.Item>
                                <Nav.Item>
                                    <ButtonLink className={this.state.isScroll?"text-dark":"text-white"} link="#occasions" buttonName="occasions" />
                                </Nav.Item>
                                <Nav.Item>
                                    <ButtonLink className={this.state.isScroll?"text-dark":"text-white"} link="#offers" buttonName="offers" />
                                </Nav.Item>
                                <Nav.Item>
                                    <ButtonLink className={this.state.isScroll?"text-dark":"text-white"} link="#about" buttonName="about" />
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
    position:fixed;
    z-index:9;
`;
const NavHead = styled.div`
    max-width:1337px;
    width:100%;
    margin: 45px auto 100px auto;
`;
const NavBottom = styled.div`
    max-width:1337px;
    width: 100%;
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
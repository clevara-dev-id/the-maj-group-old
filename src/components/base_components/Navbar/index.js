import React, { Component } from 'react'
import styled from 'styled-components'
import { ButtonOutline, ButtonLink, ButtonSearch } from '../Button'
import $ from 'jquery';

import LogoImg from '../../../Assets/logo.svg'
import { Navbar, Nav } from 'react-bootstrap'

import '../css/navbar.css'


export class NavigationBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            isScroll:false
        }
        
    }

    componentWillMount(){
        
        window.addEventListener('load',this.firstload);
        window.addEventListener('scroll', this.handleScroll);

    }
    componentDidUpdate(){
        window.addEventListener('scroll', this.handleScroll);
    }

    firstload = () => {
        $("#buttonsearch").hide();
        $("#buttonNav").hide();
    }
    handleScroll = () => {
        let navbar = document.getElementById("navbar");
        let sticky = navbar.offsetTop;
        if(window.pageYOffset >= sticky)
        {
            $(".addColor").css({"color" : "#C4964B" });
        }
        if (document.body.scrollTop > 290 || document.documentElement.scrollTop > 290) {
            navbar.classList.add("sticky");
            $("#buttonsearch").show();
            $("#buttonNav").show();
            $("#navbartop").hide();
            $(".addColor").css({"color" : "#C4964B" });  
            $("#buttonsearch > a").css({"color" : "#C4964B" });
            $("#buttonNav > a").css({"color" : "#C4964B" });
            $("#buttonNav > .booking").css({"border": "2px solid #C4964B" });
          } else {
            navbar.classList.remove("sticky");
            $("#buttonsearch").hide();
            $("#buttonNav").hide();
            $("#navbartop").show();
            $(".addColor").css({"color" : "#ffffff" });
          }
    }

    render(){
        return(
            <>
                <Container id="navbar" className={"bg-dark-transparent"}>
                    <NavHead 
                        className={"show"} id="navbartop"
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
                    <NavBottom className={"border-top-1"} >
                        <NavBottomContainer >
                            {/* <Nav className="justify-content-start">
                                <ButtonSearch className={"addColor"} link="#search" buttonName="Search" />
                                <div style={{width:"120px"}}></div>
                            </Nav> */}
                            <Nav className="justify-content-center" >
                                <Nav.Item >
                                    <div id="buttonsearch">
                                        <ButtonSearch className={"addColor"} link="#search" buttonName="Search" />
                                    </div>
                                </Nav.Item>
                                <Nav.Item > 
                                    <ButtonLink className={"addColor"} link="#" buttonName="destination" />
                                </Nav.Item>
                                <Nav.Item>
                                    <ButtonLink className={"addColor"} link="#" buttonName="portfolio" />
                                </Nav.Item>
                                <Nav.Item>
                                    <ButtonLink className={"addColor"}  link="#" buttonName="occasions" />
                                </Nav.Item>
                                <Nav.Item>
                                    <ButtonLink className={"addColor"}  link="#" buttonName="offers" />
                                </Nav.Item>
                                <Nav.Item>
                                    <ButtonLink className={"addColor"} link="#" buttonName="about" />
                                </Nav.Item>
                                
                                <Nav.Item>
                                    <div id="buttonNav">
                                        <ButtonLink className={"addColor"} link="/login" buttonName="Login" />
                                        <ButtonOutline 
                                            className="booking" 
                                            link="/booking" 
                                            border="2px solid #C4964B" 
                                            color="#C4964B" 
                                            buttonName="Book Now" 
                                            padding="11px"
                                        />
                                    </div>
                                </Nav.Item>
                            </Nav>
                            {/* <Nav className="justify-content-end" >
                                
                            </Nav> */}
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
    width:100%;
    margin-bottom:34px;
    margin-left:auto;
    margin-right:auto;
`;
const Img = styled.img`
    width:100px;
`;
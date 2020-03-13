import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import './css/Slidebar.css'
import logo from '../../../Assets/Image/TheMajGroupLogo.svg'


export default class SlidebarComponent extends Component {
    render() {
        const image = {
            paddingTop : "22px",
            paddingLeft : "16px"

        }
        return (
            <div className="container" id="SliderComponent">
                <div>
                    <DivHead><img style={image} src={logo} width="71.4px" height="63px" /></DivHead>
                </div>
                <div>
                    <div><DivSearch><Input defaultValue="" placeholder="SEARCH" type="text" /></DivSearch></div>
                </div>
                <div>
                    <DivButton><Destination>DESTINATION</Destination></DivButton>
                </div>   
            </div>
        )
    }
}

const DivHead = styled.div`
    padding-left: 0px;
`; 
const Input = styled.input`
    padding-top: 41px;
    padding-bottom: 8px;
    margin: 0.5em;
    color: ${props => props.inputColor || "#C4964B;"};
    background: #ffffff;
    border: none;
    border-radius: 0px;
    border-bottom: 1px solid #C4964B;
    width : 345px;
    height : 18px;
    font-size: 13px;
    font-style: normal;
    font-weight: bold;
    line-height: 18px;
    outline: none;
`;

const DivSearch = styled.div`
    padding-left : 10px;
`;

const Destination = styled.button`
    display: inline-block;
    color: #C4964B;
    font-size: 13px;
    margin: 1em;
    padding: 0.25em 1em;
    border: 0px;
    border-radius: 0px;
    display: block;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 18px solid transparent;
    background: transparent;
    transition: .05s all;
    &:hover{
        padding : 0px
        width: 375px;
        color: #ffffff;
        background: #C4964B;
        cursor: pointer;
    }
`;

const DivButton = styled.div`
    padding-top: 40px;
`;
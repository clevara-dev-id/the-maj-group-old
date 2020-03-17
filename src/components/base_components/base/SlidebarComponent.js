import ReactDOM from 'react-dom'
import React, { Component } from 'react'
// import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import './css/Slidebar.css';
import logo from '../../../Assets/Image/TheMajGroupLogo.svg';
import xcross from '../../../Assets/Image/close.svg';
import humberger from '../../../Assets/Image/humberger.svg'


export class SlidebarComponent extends Component {
    openNav = () =>{
        if (
            document.getElementById("mySidenav") &&
            document.getElementById("main")
          ) {
            document.getElementById("mySidenav").style.width = "375px";
            document.getElementById("main").style.marginLeft = "375px";
          }
    }
    closeNav = () =>{
        if (
            document.getElementById("mySidenav") &&
            document.getElementById("main")
          ) {
            document.getElementById("mySidenav").style.width = "0%";
            document.getElementById("main").style.marginLeft = "0%";
          }
    }
    render() {
        const image = {
            width: "71.4px",
            height: "63px",
        }
        return (
            <div>
            <div id="mySidenav" className="sidenav">
              <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>
                &times;
              </a>
                <DivHead><img style={image} src={logo} width="71.4px" height="63px" /></DivHead>
                <div>
                    <div><DivSearch><Input defaultValue="" onKeyPress={this.props.search} placeholder="SEARCH" type="text" /></DivSearch></div>
                </div>
                {
                    this.props.store.map((data)=>{
                      return (
                        <div>
                            <div>
                                <DivButton>
                                    <ButtonLink href={data.link}>
                                        <ButtonBar>
                                            {data.name}
                                        </ButtonBar>
                                    </ButtonLink>
                                </DivButton>
                            </div>
                        </div>
                      );
                    })
                }
                
            </div>
    
            <div id="main">
                <div>
                    <div className="buttonHum">
                        <span
                            styles={{ fontSize: "30", cursor: "pointer" }}
                            onClick={this.openNav}>
                            <img src={humberger} width="22px" height="18.9px" />
                        </span>
                    </div>
                </div>
                <div>
                    <div className="imageHum"><img src={logo} width="71.4px" height="63px" /></div>
                </div>
                <div>
                    <div className="labelHum">
                        <BookButton href={this.props.booklink}>BOOK</BookButton>
                    </div>
                </div>
            </div>

          </div>
        )
    }
    
}


const DivHead = styled.div`
    padding-left: 16px;
    margin-top: 7px; 
`; 
const Input = styled.input`
    padding-top: 9px;
    padding-bottom: 8px;
    margin: 5px;
    color: ${props => props.inputColor || "#C4964B;"};
    background: #ffffff;
    border: none;
    border-radius: 0px;
    border-bottom: 1px solid #C4964B;
    width : 330px;
    height : 18px;
    font-family : Verlag B;
    font-size: 13px;
    font-style: normal;
    font-weight: bold;
    line-height: 18px;
    outline: none;
`;

const DivSearch = styled.div`
    padding-left : 10px;
    margin-left: 0px;
    margin-top: 41px;
`;

const ButtonBar = styled.li`
    color: #C4964B;
    display: block;
    line-height: 18px solid transparent;
    background: transparent;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    &:hover{
        color: #C4964B;;
        cursor: pointer;
        
    }
`;

const ButtonLink = styled.a`
    color: #C4964B;
    text-decoration:none;
    &:hover{
        text-decoration:none;
    }
`;
const DivButton = styled.div`
    padding-top: 40px;
    text-align:left;
    padding-left:15px;
`;

const BookButton = styled.a`
    text-decoration:none;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    color : #C4964B;
    &:hover{
        text-decoration:none;
        color : #C4964B;    
    }
`;
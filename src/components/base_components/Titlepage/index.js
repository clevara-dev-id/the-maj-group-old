import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
export class TitlePage extends Component {
    render() {

        return (
            <>
                <TitleDiv style={{marginLeft: this.props.marginLeft}}>
                        <HomeSpan>HOME / </HomeSpan><ChildSpan>{this.props.name}</ChildSpan>
                </TitleDiv>
            </>
        );
    }
}



const HomeSpan = styled.span`
    color : #C4C9D2;
`;
const ChildSpan = styled.span`
    color : #C4964B;
`;

const TitleDiv = styled.div`
    padding-left: 0px;
    margin-left: 91px;
    margin-top: 44px;
    font-family: "Verlag B";
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    text-transform: uppercase;
`;

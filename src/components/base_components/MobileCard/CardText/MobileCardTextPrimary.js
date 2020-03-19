import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const MobileCardTextPrimary = (props) => (
    <Card {...props}>
        <H2>{props.title}</H2>
        <P>{props.text}</P>
        <ButtonOutline to={props.link}>{props.linkName}</ButtonOutline>
    </Card>
)

const Card = styled.div`
    width: 343px;
    height: 214.67px;
    margin: ${props => props.margin};
    border-radius: 2px;
`;

const H2 = styled.h2`
    font-style:normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 36px;
    color: #000000;
    text-align: center;
    margin: 0px 0px 12px 0px;
`;


const P = styled.p`
    font-size: 16px;
    line-height: 26px;
    font-weight: normal;
    color: #000000;
    height: 108px;
    white-space: wrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const ButtonOutline = styled(Link)`
    color: #C4964B;
    margin-bottom: 10px;
    padding-bottom: 10px;
    transition: .3s all;
    border-bottom:1px solid;
    letter-spacing: .5px;
    &:hover {
        padding-bottom: 8px;
        text-decoration: none;
        color: #000;
    }
`;

export default MobileCardTextPrimary
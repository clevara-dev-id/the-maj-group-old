import React from 'react'
import styled from 'styled-components'

export const HeadComponent = (props) => (
    <>
        <HeadBackground bg={props.bg}>
            <H1>{props.text}</H1>
        </HeadBackground>
    </>
)
const HeadBackground = styled.div`
    background: url(${props=>props.bg});
    width:100%;
    height: 100vh;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;
const H1 = styled.h1`
    width: 825px;
    margin-left:auto;
    margin-right:auto;
    font-size: 64px;
    line-height: 85px;
    text-align: center;
    color: #fff;
    text-shadow: 0px 20px 60px rgba(138, 149, 158, 0.2);
`;
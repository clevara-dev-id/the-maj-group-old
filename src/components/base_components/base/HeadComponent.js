import React from 'react'
import styled from 'styled-components'
import {device} from './'

export const HeadComponent = (props) => (
    <>
        <HeadBackground bg={props.bg}>
            <Center>    
                <H1>{props.text}</H1>
            </Center>
        </HeadBackground>
    </>
)
const HeadBackground = styled.div`
    background: url(${props=>props.bg});
    width:100%;
    height: 700px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content:center;
    @media only screen and ${device.tablet}{
        display: block;
        justify-content: start;
        height: 400px;
    }
`;
const Center = styled.div`
    margin: auto;
    padding-top: 380px;
    padding-bottom: 230px;
    @media only screen and ${device.tablet}{    
        padding: 230px 10px;
    }
`;
const H1 = styled.h1`
    max-width: 825px;
    width:100%;
    margin-left:auto;
    margin-right:auto;
    font-size: 64px;
    line-height: 85px;
    text-align: center;
    color: #fff;
    text-shadow: 0px 20px 60px rgba(138, 149, 158, 0.2);
    @media only screen and ${device.tablet} {
        max-width: 340px;
        font-size: 34px;
        line-height: 41px;
        text-align: left;
    }
`;
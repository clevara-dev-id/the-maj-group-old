import React from 'react'
import styled from 'styled-components'

export const MobileTitle = (props) => (
    <Container {...props}>
        <Heading
            url = {props.image}
        >
            {props.text}
        </Heading>
    </Container>
)


const Heading = styled.h1`
    border: 1px solid;
    color: #C4964B;
    font-size: 48px;
    height: 35px;
    padding: 55px 0px;
    -webkit-text-fill-color: transparent;
    background: -webkit-linear-gradient(transparent, transparent),
    url(${props=>props.url}) repeat;
    background: -o-linear-gradient(transparent, transparent);
    -webkit-background-clip: text;
`;

const Container = styled.div(
    props => ({
        margin: props.margin,
        padding: props.padding,
        className: props.className,
    })
)
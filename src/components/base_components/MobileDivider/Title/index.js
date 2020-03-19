import React from 'react'
import styled from 'styled-components'

export const MobileTitle = (props) => (
    <Container {...props}>
        <Heading
            url = {props.image}
            textAlign={props.textAlign}
        >
            {props.text}
        </Heading>
    </Container>
)


const Heading = styled.h1`
    color: #C4964B;
    font-size: 40px;
    padding: 0px;
    -webkit-text-fill-color: transparent;
    background: -webkit-linear-gradient(transparent, transparent),
    url(${props=>props.url}) repeat;
    background: -o-linear-gradient(transparent, transparent);
    -webkit-background-clip: text;
    text-align: ${props => props.textAlign}
`;

const Container = styled.div(
    props => ({
        margin: props.margin,
        padding: props.padding,
        className: props.className,
    })
)
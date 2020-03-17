import React from 'react'
import styled from 'styled-components'

const MobileCardTextSecondary = props => {
    return (
        <Container {...props}>
            <H5>Destination</H5>
            <H2> {props.title} </H2>
            <P> {props.text} </P>
        </Container>
    )
}

const Container = styled.div(
    props => ({
        margin: props.margin,
        padding: props.padding,
    })
)

const H5 = styled.h5(
    props => ({
        fontWeight: "bold",
        textTransform: "uppercase",
        color: "#C4964B",
        margin: props.margin,
        padding: props.padding,
    })
)

const H2 = styled.h1(
    props => ({
        color: "#000000",
        margin: props.margin,
        padding: props.padding,
        fontStyle: "normal",
        fontSize: "22px",
        lineHeight: "36px"
    })
)

const P = styled.p(
    props => ({
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "normal",
        lineHeight: "26px",
        color: "#000000",
        margin: props.margin,
        padding: props.padding,
    })
)

export default MobileCardTextSecondary

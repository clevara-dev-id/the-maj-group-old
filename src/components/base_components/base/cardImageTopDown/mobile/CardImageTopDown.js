import React from 'react'
import styled from 'styled-components'
import { ButtonOutlineSmall } from '../../'

const MobileCardImageTopDown = props => {
    return (
        <Container style={{...props.containerStyle}}>
            {props.reversed ? (
                <>
                    <Group margin="0 0 48px 0" style={props.groupStyle}>
                        <Caps1 color="#C4964B">{props.caps}</Caps1>
                        <H2>{props.head}</H2>
                        <P width="350px">{props.desc}</P>
                    </Group>
                    <img 
                        src={props.image} 
                        style={{width: "350px", height: "400px", ...props.imageStyle}} 
                        alt="card-img-top-down" 
                    />
                </>
            ) : (
                <>
                    <img 
                        src={props.image} 
                        style={{width: "350px", height: "400px",...props.imageStyle}}
                        alt="card-img-top-down" 
                    />
                    <Group margin="40px 0 0 0" style={props.groupStyle}>
                        <Caps1 color="#C4964B">{props.caps}</Caps1>
                        <H2>{props.head}</H2>
                        <P width="350px">{props.desc}</P>
                    </Group>
                </>
            )}
            <Button href="#" color="#C4964B" padding="10px 40px" margin="24px auto 0 auto">View More</Button>
        </Container>
    )
}

const Container = styled.div(
    props => ({
        display: "block", 
        margin: "0 auto",
        padding: props.padding,
        boxSizing: "border-box",
    })
)

const Group = styled.div(
    props => ({
        textAlign: "center",
        margin: props.margin,
        padding: props.padding,
    })
)

const Caps1 = styled.h5(
    props => ({
        textTransform: "uppercase",
        margin: props.margin,
        padding: props.padding,
        color: props.color,
    })
)

const H2 = styled.h2(
    props => ({
        textTransform: "uppercase",
        margin: props.margin,
        padding: props.padding,
    })
)

const P = styled.p(
    props => ({
        margin: props.margin,
        padding: props.padding,
        width: props.width,
        height: props.height,
    })
)

const Button = styled.a(
    props => ({
        color: props.color, 
        fontSize: "13px",
        margin: props.margin,
        padding: props.padding,
        display: "block",
        lineHeight: "18px",
        position: "relative",
        textTransform: "uppercase",
        transition: ".05s all",
        backgroundColor: "transparent",
        border: "2px solid " + props.color,
        textAlign: "center",
        letterSpacing: "2px",
        "&:hover": {
            backgroundColor: props.color,
            color: "#FFFFFF",
            cursor: "pointer",
            textDecoration: "none"
        },
        width: "50%",
    })
)

export default MobileCardImageTopDown

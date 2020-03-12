import React from 'react'
import styled from 'styled-components'
import { ButtonOutline } from '..'

const CardImage = props => {
    return (
        <Container style={props.containerStyle}>
            {props.reversed ? (
                <>
                    <Group margin="0 0 48px 0" style={props.groupStyle}>
                        <Caps1>{props.caps}</Caps1>
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
                        <Caps1>{props.caps}</Caps1>
                        <H2>{props.head}</H2>
                        <P width="350px">{props.desc}</P>
                    </Group>
                </>
            )}
            {/* <Button 
                margin={props.reversed? "40px 0 0 0": "48px 0 0 0"} 
                buttonName="View More" 
                {...props} 
            /> */}
        </Container>
    )
}

const Container = styled.div(
    props => ({
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center",
        margin: props.margin,
        padding: props.padding,
        boxSizing: "border-box"
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
        padding: props.padding
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

// const Button = styled(ButtonOutline)`
//     margin: ${props => props.margin};
// `;

export default CardImage

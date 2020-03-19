import React from 'react'
import styled from 'styled-components'

export const CardItem = props => (
    <ItemContainer style={props.itemContainerStyle}>
        <img src={props.image} style={{width: "109px", height: "238px", ...props.itemImageStyle}} alt="img-card-six" />
        <H4 margin="16px 0 0 0"> {props.head} </H4>
    </ItemContainer>
)

const ItemContainer = styled.div(
    props => ({
        margin: props.margin,
        padding: props.padding,
    })
)

const H4 = styled.h4(
    props => ({
        color: "#000000",
        fontWeight: "900",
        fontSize: "15px",
        lineHeight: "20px",
        margin: props.margin,
        padding: props.padding,
    })
)

export default CardItem
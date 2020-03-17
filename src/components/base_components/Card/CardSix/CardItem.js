import React from 'react'
import styled from 'styled-components'

export const CardItem = props => (
    <ItemContainer style={props.itemContainerStyle}>
        <img src={props.image} style={{width: "160px", height: "400px", ...props.itemImageStyle}} alt="img-card-six" />
        <H4 margin="40px 0 0 0"> {props.head} </H4>
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
        margin: props.margin,
        padding: props.padding,
    })
)

export default CardItem
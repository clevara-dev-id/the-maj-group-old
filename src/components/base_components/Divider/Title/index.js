import React from 'react'
import styled from 'styled-components'

export const Title = (props) => (
  <Container {...props}>
    <Heading
      url = {props.image}
    >
      {props.text}
    </Heading>
  </Container>
)


const Heading = styled.h1`
  color: #C4964B;
  font-size: 96px;
  height: 80px;
  width: 825px;
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
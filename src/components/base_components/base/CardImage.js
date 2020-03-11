import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import { ButtonOutline } from '.'

export const CardImageRight = (props) => (
  <Container>
    <Row>
      <Col sm={4} style={ContainerStyle}>
        <Title>{props.title}</Title>
        <P>{props.text}</P>
        <ButtonOutline className="float-right" link={props.link} buttonName={props.buttonName} />
      </Col>
      <Col sm={8}>
        <Background 
          background={props.background}
        />
      </Col>
    </Row>
  </Container>
)

const Container = styled.div`
  max-width: 1110px;
  max-height: 551px;
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
`;
const ContainerStyle = {
  marginTop:92,
}
const Title = styled.h2`
  text-align: right;
  color: #000000;
`;
const P = styled.p`
  text-align: right;
  color: #000000;
  margin-top: 8px;
  margin-bottom: 48px;
`;
const Background = styled.div`
  background: url(${props => props.background});
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
`;
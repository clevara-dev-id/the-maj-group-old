import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import { ButtonOutline } from '../../Button'

export const CardImage = (props) => (
  <Container>
    <Content>
      <Row>
        {
          props.reverse?
          <>
            <SecondCol 
              {...props}
            />
            <FirstCol
              {...props}
            />
          </>
          :
            <>
              <FirstCol
                {...props}
              />
              <SecondCol 
                {...props}
              />
            </>
        }
      </Row>
    </Content>
  </Container>
)

const FirstCol = (props) => (
  <Col sm={4} style={MarginContentStyle}>
    <Title {...props}>{props.title}</Title>
    <P {...props}>{props.text}</P>
    <ButtonOutline className={props.reverse?"float-left":"float-right"} link={props.link} buttonName={props.buttonName} />
  </Col>
)

const SecondCol = (props) => (
  <Col sm={8}>
    <Background 
      background={props.background}
    />
  </Col>
)

const Container = styled.div`
  width: 100%;
  padding-top:175px;
  padding-bottom:175px;
`;

const Content = styled.div`
  width: 1110px;
  height: 551px;
  margin-left: auto;
  margin-right: auto;
`;
const MarginContentStyle = {
  marginTop:92,
}
const Title = styled.h2`
  text-align: ${props=>props.reverse?"left":"right"};
  color: #000000;
`;
const P = styled.p`
  text-align: ${props=>props.reverse?"left":"right"};
  color: #000000;
  margin-top: 8px;
  margin-bottom: 48px;
`;
const Background = styled.div`
  background: url(${props => props.background});
  background-repeat: no-repeat;
  width: 730px;
  height: 551px;
`;

export default CardImage

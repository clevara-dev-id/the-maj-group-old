import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import { ButtonOutline } from '../../Button'

export const CardImage = (props) => (
  <Container {...props}>
    <Content {...props}>
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
  <Col lg={props.colContentSize || 4} style={{...MarginContentStyle, ...props.contentStyle}}>
    <Caps1 textAlign={props.textAlign}>{props.caps}</Caps1>
    <Title textAlign={props.textAlign}>{props.title}</Title>
    <P textAlign={props.textAlign}>{props.text}</P>
    <ButtonOutline className={props.reverse?"float-left":"float-right"} link={props.link} buttonName={props.buttonName} />
  </Col>
)

const SecondCol = (props) => (
  <Col lg={props.colImageSize || 8}>
    <Background 
      background={props.background}
      {...props}
    />
  </Col>
)

const Caps1 = styled.h5(
  props => ({
    textAlign: props.textAlign,
    textTransform: "uppercase",
    letterSpacing: "3px",
    color: "#C4964B",
  })
)

const Container = styled.div`
  width: 100%;
  padding: ${props => props.containerPadding || "175px 0px"};
  margin: ${props => props.margin};
`;

const Content = styled.div`
  width: ${props => props.contentWidth || "1110px"};
  height: ${props => props.contentHeight || "551px"};
  margin-left: auto;
  margin-right: auto;
`;

const MarginContentStyle = {
  marginTop:92,
}

const Title = styled.h2`
text-align: ${props=>props.textAlign};
  color: #000000;
`;

const P = styled.p`
text-align: ${props=>props.textAlign};
color: #000000;
  margin-top: 8px;
  margin-bottom: 48px;
`;
const Background = styled.div`
  background: url(${props => props.background});
  background-repeat: no-repeat;
  background-position: center;
  padding:0px;
  width: ${props => props.imageWidth || "730px"};
  height: ${props => props.imageHeight || "551px"};
`;

export default CardImage

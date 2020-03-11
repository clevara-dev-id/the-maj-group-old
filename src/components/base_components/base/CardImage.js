import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import { ButtonOutline } from '.'

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

export const CardImageLarge = (props) => (
  <ContainerLarge>
    <ContentLarge>
      <Row>
        {props.reverse?
          <>
            <SecondColLarge {...props} />
            <FirstColLarge {...props} />
          </> :
          <>
            <FirstColLarge {...props} />
            <SecondColLarge {...props} />
          </>
        }
      </Row>
    </ContentLarge>
  </ContainerLarge>
)

const FirstColLarge = (props) => (
  <Col style={MarginContentStyleLarge} sm={6}>
    <Caption>{props.caption}</Caption>
    <TitleLarge>{props.title}</TitleLarge>
    <Text>{props.text}</Text>
    <ButtonOutline link={props.link} buttonName={props.buttonName} />
  </Col>
)

const SecondColLarge = (props) => (
  <Col sm={6}>
    <BackgroundLarge background={props.background} />
  </Col>
)

const ContainerLarge = styled.div`
  height: 900px;
  padding: 85px 0px;
`;

const ContentLarge = styled.div`
  width:1110px;
  height:730px;
  margin-left: auto;
  margin-right: auto;
`;
const Caption = styled.h5`
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #000;
`;
const TitleLarge = styled.h1`
  color: #000;
  margin-top: 8px;
`;
const Text = styled.p`
  color: #000;
  margin-top: 24px;
  margin-bottom: 42px;
`;
const BackgroundLarge = styled.div`
  background: url(${props => props.background});
  width:540px;
  height:730px;
`;
const MarginContentStyleLarge = {
  marginTop: 116
}
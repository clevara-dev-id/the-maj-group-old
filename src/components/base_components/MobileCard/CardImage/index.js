import React, { Component } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import { ButtonOutline } from '../../Button'

export class MobileCardImage extends Component { 
    constructor(props) {
        super(props)
    
        this.state = {
            localStore: [],
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.store !== prevState.localStore) {
            return {
                localStore: nextProps.store
            }
        }
        return null
    }
    
    render() {
        return (
        <Container>
            {this.state.localStore && this.state.localStore.map((item, i) => (
                <Content key={i}>
                    <SecondCol 
                        background={item.background}
                    />
                    <FirstCol
                        textAlign={i % 2? "left": "right"}
                        title={item.title}
                        text={item.text}
                        link={item.link}
                        buttonName="View More"
                        reverse={this.props.reverse}
                        {...this.props}
                    />
                </Content>
            ))}
        </Container>
        )
    }
}

const FirstCol = (props) => (
  <div style={{textAlign: props.textAlign, marginTop: "16px"}}>
    <Caps1 margin="16px 0 4px 0">Destination</Caps1>
    <Title>{props.title}</Title>
    <P>{props.text}</P>
    <ButtonOutlineSmall margin="34px 0 0 0" padding="10px 37.35px" href={props.link}>View More</ButtonOutlineSmall>
  </div>
)

const SecondCol = (props) => (
    <Background 
        background={props.background}
    />
)

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 80px;
`;

const Content = styled.div`
  box-sizing: border-box;
  width: 344px;
  height: 463px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 69px;
  padding: 0;
`;

const Caps1 = styled.h5(
    props => ({
        color: "#C4964B",
        lineHeight: "16px",
        margin: props.margin,
        padding: props.padding,
        letterSpacing: "3px",
        textTransform: "uppercase",
    })
)

const Title = styled.h2`
  color: #000000;
  text-transform: uppercase;
`;

const P = styled.p`
  color: #000000;
  margin-top: 8px;
  margin-bottom: 24px;
`;

const Background = styled.div`
  background: url(${props => props.background});
  background-repeat: no-repeat;
  width: 344px;
  height: 259px;
`;

const ButtonOutlineSmall = styled.a(
    props => ({
        backgroundColor: "transparent",
        color: "#C4964B",
        width: "157.26px",
        height: "40px",
        padding: props.padding,
        margin: props.margin,
        border: "1px solid #C4964B",
        textAlign: "center",
        textTransform: "uppercase",
        letterSpacing: "2px",
        lineHeight: "18px",
        "&:hover": {
            color: "#FFFFFF",
            backgroundColor: "#C4964B",
        }
    })
)

export class MobileCardImageLarge extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             localStore: [],
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.store !== prevState.localStore) {
            return {
                localStore: nextProps.store
            }
        }
        return null
    }
    
    render() {
        return (
        <ContainerLarge>
            {this.state.localStore && this.state.localStore.map((item, i) => (
                <ContentLarge key={i}>
                    <SecondColLarge
                        background={item.background}
                    />
                    <FirstColLarge 
                        caption={item.caption}
                        title={item.title}
                        text={item.text}
                        link={item.link}
                        buttonName="View More"
                    />
                </ContentLarge>
            ))}
        </ContainerLarge>
        )
    }
}

  const FirstColLarge = (props) => (
    <div>
      <Caption>{props.caption}</Caption>
      <TitleLarge>{props.title}</TitleLarge>
      <Text>{props.text}</Text>
      <ButtonOutline link={props.link} buttonName={props.buttonName} />
    </div>
  )
  
  const SecondColLarge = (props) => (
    <div>
      <BackgroundLarge background={props.background} />
    </div>
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
    width:345px;
    height:261px;
  `;
  const MarginContentStyleLarge = {
    marginTop: 116
  }
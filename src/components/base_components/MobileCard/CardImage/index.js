import React, { Component } from 'react'
import styled from 'styled-components'

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
                        textAlign={!this.props.textAlign? i % 2? "left": "right" : this.props.textAlign}
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
    <ButtonOutlineSmall padding="10px 39px" href={props.link}>View More</ButtonOutlineSmall>
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
  margin-bottom: 34px;
`;

const Background = styled.div`
  background: url(${props => props.background});
  background-repeat: no-repeat;
  width: 344px;
  height: 259px;
`;


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
                <ContentLarge key={i} margin="36px auto">
                    <SecondColLarge
                        background={item.background}
                    />
                    <FirstColLarge 
                        caption={item.caption}
                        title={item.title}
                        text={item.text}
                        link={item.link}
                        list={item.list? item.list: null}
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
      <Text marginBottom={!props.list? "36px": null}>{props.text}</Text>
      {props.list? (
        <List className="container">
          {props.list.map((data, i) => (
            <li style={{marginTop: "-15px"}}><Item> {data} </Item></li>
          ))}
        </List>
      ) : null}
      <ButtonOutlineSmall padding="10px 39px">{props.buttonName}</ButtonOutlineSmall>
    </div>
  )
  
  const SecondColLarge = (props) => (
    <BackgroundLarge background={props.background} />
  )
  
  const ContainerLarge = styled.div`
    margin: ${props => props.margin}
  `;
  
  const ContentLarge = styled.div`
    width: 345px;
    height: 533px;
    margin: 73px auto;
  `;

  const Caption = styled.h5`
    letter-spacing: 3px;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    margin-top: 16px;
    color: #C4964B;
  `;

  const TitleLarge = styled.h1`
    color: #000;
    margin-top: 8px;
  `;

  const Text = styled.p`
    color: #000;
    margin-top: 24px;
    margin-bottom: ${props => props.marginBottom}
  `;

  const BackgroundLarge = styled.div`
    background: url(${props => props.background});
    background-position: center;
    background-repeat: no-repeat;
    width:345px;
    height:250px;
  `;

  const List = styled.ul({
    marginTop: "0",
    marginBottom: "36px",
  })

  const L = styled.li({
    margin: "0px",
    padding: "0px"
  })

  const Item = styled.p({
    color: "#000"
  })


const ButtonOutlineSmall = styled.a(
  props => ({
      backgroundColor: "transparent",
      color: "#C4964B !important",
      width: "157.26px",
      height: "40px",
      padding: props.padding,
      margin: props.margin,
      border: "1px solid #C4964B",
      textAlign: "center",
      textDecoration: "none",
      textTransform: "uppercase",
      letterSpacing: "2px",
      lineHeight: "18px",
      "&:hover": {
          color: "#FFFFFF",
          backgroundColor: "#C4964B",
          textDecoration: "none",
      }
  })
)

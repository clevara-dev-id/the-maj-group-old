import React, { Component } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import { ButtonOutline } from '../../Button'
import 'video-react/dist/video-react.css'
import { VideoPlayer } from '../../VIdeo'

export class CardVideo extends Component{ 
    constructor(props) {
        super(props)
    
        this.state = {
            localStore: []
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.store.length !== prevState.localStore.length) {
            return {
                localStore: nextProps.store
            }
        }
        return null
    }
    
    render() {
        return (
            <Container {...this.props}>
                {this.state.localStore.length && this.state.localStore.map((data, i) => (
                    <Content {...this.props} key={i}>
                        <Row>
                        {
                            this.props.reverse?
                            <>
                                <SecondCol 
                                    {...this.props}
                                >
                                    <VideoPlayer
                                        src={data.video}
                                        poster={this.props.poster}
                                    />
                                </SecondCol>
                                <FirstCol
                                    {...this.props}
                                    title={data.title}
                                    text={data.text}
                                    list={data.list && data.list}
                                    link={data.link}
                                />
                            </>
                            :
                            <>
                                <FirstCol
                                    {...this.props}
                                    title={data.title}
                                    text={data.text}
                                    list={data.list && data.list}
                                    link={data.link}
                                />
                                <SecondCol 
                                    {...this.props}
                                >
                                    <VideoPlayer
                                        src={data.video}
                                        poster={this.props.poster}
                                    />
                                </SecondCol>
                            </>
                        }
                        </Row>
                    </Content>
                ))}
            </Container>
        )
    }
}
const FirstCol = (props) => (
    <Col lg={props.colContentSize || 4} style={{...MarginContentStyle, ...props.contentStyle}}>
        {props.caption? <Caps1 textAlign={props.textAlign}>{props.caps}</Caps1> : null}
        <Title textAlign={props.textAlign}>{props.title}</Title>
        <P textAlign={props.textAlign}>{props.text}</P>
        {props.list? (
            <List className="container">
                {props.list.map((data, i) => (
                    <li key={i} style={{marginTop: "-15px"}}><Item> {data} </Item></li>
                ))}
            </List>
        ) : null}
        <ButtonOutline className={props.reverse?"float-right":"float-left"} link={props.link} buttonName={props.buttonName} />
    </Col>
)

const SecondCol = (props) => (
    <Col lg={props.colImageSize || 8}>
        {props.children}
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

const List = styled.ul({
    marginTop: "0",         
    marginBottom: "36px",
})

const Item = styled.p({
    color: "#000"
})

export default CardVideo

import React, { Component } from 'react'
import styled from 'styled-components'

export default class CardImageTopDown extends Component {
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
            <Container {...this.props}>
                    {this.state.localStore && this.state.localStore.map((item, i) => {
                        return this.props.reversed ? (
                            <ContainerContent style={this.props.containerStyle}>
                                <Group margin="0 0 48px 0" style={this.props.groupStyle}>
                                    <Caps1 color="#C4964B">{item.caps}</Caps1>
                                    <H2>{item.head}</H2>
                                    <P width="350px">{item.desc}</P>
                                </Group>
                                <img 
                                    src={item.image} 
                                    style={{width: "350px", height: "400px", ...this.props.imageStyle}} 
                                    alt="card-img-top-down" 
                                />
                                <Button href={item.link} color="#C4964B" margin="48px auto" padding="10px 40px">View More</Button>
                            </ContainerContent>
                        ) : (
                            <ContainerContent style={this.props.containerStyle}>
                                <img 
                                    src={item.image} 
                                    style={{width: "350px", height: "400px", ...this.props.imageStyle}}
                                    alt="card-img-top-down" 
                                />
                                <Group margin="40px 0 0 0" style={this.props.groupStyle}>
                                    <Caps1 color="#C4964B">{item.caps}</Caps1>
                                    <H2>{item.head}</H2>
                                    <P width="350px">{item.desc}</P>
                                </Group>
                                <Button href={item.link} color="#C4964B" margin="48px auto" padding="10px 40px">View More</Button>
                            </ContainerContent>
                        )
                    })}
            </Container>
        )
    }
}

const Container = styled.div(
    props => ({
        display: "flex", 
        flexDirection: "row", 
        justifyContent: "space-between", 
        margin: props.margin, 
        padding: "124px 0px",
    })
)

const ContainerContent = styled.div(
    props => ({
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center",
        margin: props.margin,
        padding: props.padding,
        boxSizing: "border-box"
    })
)

const Group = styled.div(
    props => ({
        textAlign: "center",
        margin: props.margin,
        padding: props.padding,
    })
)

const Caps1 = styled.h5(
    props => ({
        color: props.color,
        textTransform: "uppercase",
        margin: props.margin,
        padding: props.padding
    })
)

const H2 = styled.h2(
    props => ({
        textTransform: "uppercase",
        margin: props.margin,
        padding: props.padding,
    })
)

const P = styled.p(
    props => ({
        margin: props.margin,
        padding: props.padding,
        width: props.width,
        height: props.height,
    })
)

const Button = styled.a(
    props => ({
        color: props.color, 
        fontSize: "13px",
        fontWeight: "bold",
        margin: props.margin,
        padding: props.padding,
        display: "block",
        lineHeight: "18px",
        position: "relative",
        textTransform: "uppercase",
        transition: ".05s all",
        backgroundColor: "transparent",
        border: "2px solid " + props.color,
        textAlign: "center",
        letterSpacing: "2px",
        "&:hover": {
            backgroundColor: props.color,
            color: "#FFFFFF",
            cursor: "pointer",
            textDecoration: "none",
        }
    })
)

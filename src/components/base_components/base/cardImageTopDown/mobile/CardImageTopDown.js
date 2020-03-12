import React, { Component } from 'react'
import styled from 'styled-components'
import { ButtonOutlineSmall } from '../../'

class MobileCardImageTopDown extends Component {
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
            <div className="container" style={{display: "flex", flexDirection: "column", justifyContent: "space-arround", marginTop: "79px", height: "100%"}}>
                {this.state.localStore && this.state.localStore.map((item, i) => (
                    this.props.reversed ? (
                            <Container style={{...this.props.containerStyle}}>
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
                                <Button href={item.link} color="#C4964B" padding="10px 40px" margin="24px auto 0 auto">View More</Button>
                            </Container>
                        ) : (
                            <Container padding="0 0 80px 0" style={{...this.props.containerStyle}}>
                                <img 
                                    src={item.image} 
                                    style={{width: "350px", height: "400px",...this.props.imageStyle}}
                                    alt="card-img-top-down" 
                                />
                                <Group margin="40px 0 0 0" style={this.props.groupStyle}>
                                    <Caps1 color="#C4964B">{item.caps}</Caps1>
                                    <H2>{item.head}</H2>
                                    <P width="350px">{item.desc}</P>
                                </Group>
                                <Button href={item.link} color="#C4964B" padding="10px 40px" margin="24px auto 0 auto">View More</Button>
                            </Container>
                        )
                ))}
            </div>
        )
    }
}

const Container = styled.div(
    props => ({
        display: "block", 
        margin: "0 auto",
        padding: props.padding,
        boxSizing: "border-box",
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
        textTransform: "uppercase",
        margin: props.margin,
        padding: props.padding,
        color: props.color,
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
            textDecoration: "none"
        },
        width: "50%",
    })
)

export default MobileCardImageTopDown

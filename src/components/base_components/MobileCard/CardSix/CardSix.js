import React, { Component } from 'react'
import styled from 'styled-components'
import CardItem from './CardItem'

export class MobileCardSix extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            localStore: []
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.store !== prevState.localStore) {
            return {
                localStore: nextProps.store
            }
        }
    }

    render() {
    
        return (
            <Container style={this.props.containerStyle} className={this.props.className}>
                {this.state.localStore && this.state.localStore.map((item, i) => (
                    <CardItem image={item.image} head={item.head} {...this.props} />
                ))}
            </Container>
        )
    }
}


// Style CSS
const Container = styled.div(
    props => ({
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: props.margin,
        padding: props.padding,
        textAlign: "center",
        width: "345px", 
        height: "274px"
    })
)

export default MobileCardSix
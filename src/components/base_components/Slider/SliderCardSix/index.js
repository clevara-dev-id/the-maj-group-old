import React, { Component } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import {CardItem} from '../../Card'

export class SliderCardSix extends Component {
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
        return null
    }
    
    render() {
        return (
            <Container>
                <Slider
                    slidesToShow={6}
                    slidesToScroll={1}
                    speed={3000}
                    lazyLoad={true}
                >
                    {this.state.localStore && this.state.localStore.map((item, i) => (
                        <CardItem />
                    ))}
                </Slider>
            </Container>
        )
    }
}

const Container = styled.div(
    props => ({
        // display: "flex",
        // flexDirection: "row",
        // justifyContent: "space-between",
        margin: props.margin,
        padding: props.padding,
        textAlign: "center",
        width: "1110px", 
        height: "460px"
    })
)

export default SliderCardSix

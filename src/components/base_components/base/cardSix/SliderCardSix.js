import React, { Component } from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'

import CardItem from './CardItem'

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
            <Container className={this.props.className}>
                <Slider
                    dots={true}
                    slidesToShow={6}
                    slidesToScroll={1}
                    speed={3000}
                    lazyLoad={true}
                    autoplay={true}
                    autoplaySpeed={2000}
                    nextArrow={<NextArrow />}
                    prevArrow={<PrevArrow />}
                >
                    {this.state.localStore && this.state.localStore.map((item, i) => (
                        <div>
                            <CardItem image={item.image} head={item.head} {...this.props} />
                        </div>
                    ))}
                </Slider>
            </Container>
        )
    }
}

const NextArrow = ({className, style, onClick}) => (
    <div 
        className={className}
        style={{...style, display: "block", backgroundColor: "grey"}}
        onClick={onClick}
    />
) 

const PrevArrow = ({className, style, onClick}) => (
    <div
        className={className}
        style={{...style, display: "block", backgroundColor: "grey"}}
        onClick={onClick}
    />
)

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

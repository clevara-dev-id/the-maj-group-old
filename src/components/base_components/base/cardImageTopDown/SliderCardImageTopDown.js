import React, { Component } from 'react'
import Slider from "react-slick"
import styled from 'styled-components'
import CardImageTopDown from './CardImageTopDown'
import './styles.css'

export default class SliderCardImageTopDown extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             localStore: []
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.store !== prevState.localStore) {
            console.log(nextProps.store)
            return {
                localStore: nextProps.store
            }
        }
    }

    render() {
    
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            customPaging: i => (
                <div 
                    id="dots"
                />
            )
        }

        return (
            <Container id="card-img-top-down">
                <Slider 
                    {...settings}
                >
                    {this.state.localStore && this.state.localStore.map((item, i) => (
                        <div>
                            <CardImageTopDown
                                {...this.props}
                                image={item.image}
                                caps={item.caps}
                                head={item.head}
                                desc={item.desc} 
                            />
                        </div>
                    ))}
                </Slider>
            </Container>
        )
    }
}

const Container = styled.div(
    props => ({
        width: "1111px", 
        height: "652px",
        margin: props.margin,
        padding: props.padding,
    })
)


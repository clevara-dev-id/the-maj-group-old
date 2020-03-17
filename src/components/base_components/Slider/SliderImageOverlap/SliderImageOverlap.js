import React, { Component } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'

import background from '../../../../Assets/Image/Rectangle45.png'

export default class SliderImageOverlap extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            localStore: []
        }
    }
    
    render() {
        return (
            <div className="container">
                <Slider
                    dots={true}
                    infinite={true}
                    speed={500}
                    slidesToShow={1}
                    slidesToShow={1}
                >
                    <div>
                        <div className="float-right">
                            <CardSimpleText caps="Test" text="Testtttt" href="#linkTo" />
                            <img src={background} width="825px" height="450px" alt="card-img-overlaps" />
                        </div>
                    </div>
                    <div>
                        <CardSimpleText caps="Test" text="Testtttt" href="#linkTo" />
                        <img src={background} width="825px" height="450px" alt="card-img-overlaps" />
                    </div>
                    <div>
                        <CardSimpleText caps="Test" text="Testtttt" href="#linkTo" />
                        <img src={background} width="825px" height="450px" alt="card-img-overlaps" />
                    </div>
                </Slider>
            </div>
        )
    }
}

const CardSimpleText = props => (
    <ContainerCard padding="47px 35px">
        <h1>{props.caps}</h1>
        <p>{props.text}</p>
        <a href={props.href}>Discover now</a>
    </ContainerCard>
)

const ContainerCard = styled.div(
    props => ({
        position: "absolute",
        margin: props.margin,
        padding: props.padding,
    })
)

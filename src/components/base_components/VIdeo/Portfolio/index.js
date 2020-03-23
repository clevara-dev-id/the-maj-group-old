import React from 'react'
import { Player, LoadingSpinner, BigPlayButton } from 'video-react'
import LoremVideo from '../../../../Assets/tmp/LoremVideo.mp4'
import Poster from '../../../../Assets/tmp/Portfolio.png'
import styled from 'styled-components'
import 'video-react/dist/video-react.css'
import VideoPlayer from '../base'

export const PortfolioVideo = props => {
    return (
        <Container {...props} maxWidth="1110px" padding="0">
            <Caps1>Portfolio</Caps1>
            <H1>Phinisy Cruise</H1>

            <VideoPlayer
                id="portfolio-video" 
                margin="32px auto 0 auto"
                height={500}
                poster={Poster}
                src={LoremVideo}
            />
        </Container>
    )
}

const Container = styled.div(
    props => ({
        maxWidth: props.maxWidth,
        margin: props.margin,
        padding: props.padding,
    })
)

const Caps1 = styled.h5(
    props => ({
        color: "#C4964B",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "bold",
        lineHeight: "16px",
        margin: props.margin,
        padding: props.padding,
        letterSpacing: "3px",
        textTransform: "uppercase",
    })
)

const H1 = styled.h1(
    props => ({
        fontStyle: "italic",
        lineHeight: "41px",
        color: "#000000",
        margin: props.margin,
        padding: props.padding,
    })
)

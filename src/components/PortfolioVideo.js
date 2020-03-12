import React from 'react'
import { ResponsiveEmbed } from 'react-bootstrap'
import LoremVideo from '../Assets/tmp/LoremVideo.mp4'
import styled from 'styled-components'

const PortfolioVideo = props => {
    return (
        <Container margin="200px auto">
            <ResponsiveEmbed  aspectRatio="16by9">
                <embed  type="video/mp4" src={LoremVideo} />
            </ResponsiveEmbed>
        </Container>
    )
}

const Container = styled.div(
    props => ({
        width: "1110px",
        height: "500px",
        margin: props.margin,
        padding: props.padding,
    })
)

export default PortfolioVideo

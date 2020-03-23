import React from 'react'
import styled from 'styled-components'
import { Player, LoadingSpinner, BigPlayButton } from 'video-react'

export const VideoPlayer = props => {
    return (
        <Container style={props.containerStyle} {...props}>
            <Player 
                aspectRatio="auto"
                fluid={true}
                playInline
                {...props}
            >
                <BigPlayButton position="center" />
                <LoadingSpinner />
            </Player>
        </Container>
    )
}

export default VideoPlayer

const Container = styled.div(
    props => ({
        maxWidth: props.maxWidth,
        maxHeight: props.maxHeight,
        width: props.width,
        height: props.height,
        margin: props.margin,
        padding: props.padding,
    })
)

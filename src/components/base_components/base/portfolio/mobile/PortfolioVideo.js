import React from 'react'
import { ResponsiveEmbed } from 'react-bootstrap'
import LoremVideo from '../../../../../Assets/tmp/LoremVideo.mp4'
import styled from 'styled-components'

const MobilePortfolioVideo = props => {
    return (
        <Container margin="0 auto">
            <div style={{width: "345px", margin: "0 auto"}}>
                <Caps1>Portfolio</Caps1>
                <H1>Phinisy Cruise</H1>
            </div>

            <ContainerVideo margin="24px auto 0 auto">
                <ResponsiveEmbed  aspectRatio="16by9">
                    <embed  type="video/mp4" src={LoremVideo} />
                </ResponsiveEmbed>
            </ContainerVideo>
        </Container>
    )
}

const Container = styled.div(
    props => ({
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

const ContainerVideo = styled.div(
    props => ({
        width: "345px",
        height: "155px",
        margin: props.margin,
        padding: props.padding,
    })
)

export default MobilePortfolioVideo

import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap';

export const PrimaryArticle = (props) => (
    <>
        <Container>
            <HeadContent>
                <H5 align="center">{props.caption}</H5>
                <H1 align="center">{props.title}</H1>
            </HeadContent>
            <P align="center">{props.firstParagraph}</P>
            <Img src={props.image} alt={props.alt} />
            <P>{props.secondParagraph}</P>
        </Container>
    </>
)

export const SecondaryArticle = (props) => (
    <ContainerSecondary>
        <Row>
            <Col>
                <ImgSecondary src={props.image} alt={props.alt} />
            </Col>
            <Col>
                <HeadContent>
                    <H5 align="left">{props.caption}</H5>
                    <H1 align="left">{props.title}</H1>
                </HeadContent>
                <P align="left">{props.text}</P>
            </Col>
        </Row>
    </ContainerSecondary>
)

export const SmallArticle = (props) => (
    <>
        <ContainerSmall>
            <HeadContent>
                <H5 align={props.align}>{props.caption}</H5>
                <H1 align={props.align}>{props.title}</H1>
            </HeadContent>
            <P align={props.left}>{props.firstParagraph}</P>
            <Img src={props.image} alt={props.alt} />
            <P align={props.left}>{props.secondParagraph}</P>
        </ContainerSmall>
    </>
)

const Container = styled.div`
    width: 1110px;
    margin-left:auto;
    margin-right:auto;
`;
const ContainerSecondary = styled.div`
    width: 1110px;
    height: 637px;
    margin-left:auto;
    margin-right:auto;
`;
const ContainerSmall = styled.div`
    width:730px;
    margin-left:auto;
    margin-right:auto;
`;
const HeadContent = styled.div`
    margin-bottom:40px;
`;
const H5 = styled.h5`
    letter-spacing: 3px;
    text-align: ${props=>props.align};
    text-transform: uppercase;
    color: #C4964B;
`;
const H1 = styled.h1`
    color: #000;
    font-style: italic;
    text-align: ${props=>props.align};
`;
const P = styled.p`
    text-align: ${props=>props.align};
    color: #000000;
`;
const Img = styled.img`
    width:100%;
    height:100%;
    margin:40px auto;
`;
const ImgSecondary = styled.img`
    width:540px;
    height:637px;
`;
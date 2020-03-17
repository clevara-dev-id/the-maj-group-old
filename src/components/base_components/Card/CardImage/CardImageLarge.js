import React from 'react'
import { Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import { ButtonOutline } from '../../Button'

export const CardImageLarge = (props) => (
    <ContainerLarge>
        <ContentLarge>
            <Row>
            {props.reverse?
                <>
                    <SecondColLarge {...props} />
                    <FirstColLarge {...props} />
                </> :
                <>
                    <FirstColLarge {...props} />
                    <SecondColLarge {...props} />
                </>
            }
            </Row>
        </ContentLarge>
    </ContainerLarge>
)

const FirstColLarge = (props, {btn=true}) => (
    <Col style={MarginContentStyleLarge} lg={6}>
        <Caption>{props.caption}</Caption>
        <TitleLarge>{props.title}</TitleLarge>
        <Text>{props.text}</Text>
        {!props.btn? null: (
            <ButtonOutline link={props.link} buttonName={props.buttonName} />
        )}
    </Col>
)

const SecondColLarge = (props) => (
    <Col lg={6}>
        <BackgroundLarge background={props.background} />
    </Col>
)

const ContainerLarge = styled.div`
    clear: both;
    height: 900px;
    padding: 85px 0px;
`;

const ContentLarge = styled.div`
    width:1110px;
    height:730px;
    margin-left: auto;
    margin-right: auto;
`;

const Caption = styled.h5`
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #000;
`;

const TitleLarge = styled.h1`
    color: #000;
    margin-top: 8px;
`;

const Text = styled.p`
    color: #000;
    margin-top: 24px;
    margin-bottom: 42px;
`;

const BackgroundLarge = styled.div`
    background: url(${props => props.background});
    background-position: center;
    background-repeat: no-repeat;
    padding:0px;
    width:540px;
    height:730px;
`;

const MarginContentStyleLarge = {
    marginTop: 116
}

export default CardImageLarge

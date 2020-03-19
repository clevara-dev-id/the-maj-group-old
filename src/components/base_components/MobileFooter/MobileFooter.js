import React, { Component } from 'react'
import styled from 'styled-components'
import SubscribeForm from './SubscribeForm'

import Inst from '../../../Assets/Icon/brand/instagram.svg'
import Fb from '../../../Assets/Icon/brand/facebook.svg'
import Twitt from '../../../Assets/Icon/brand/twitter.svg'

import { ButtonPrimary } from '..'

export class MobileFooter extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
            <Container className="container">
                <ContentContainer>
                    <Caption>Contact Us</Caption>
                    <P>Reservation : <A href="tel:021 12312 878">021 12312 878</A></P>
                    <P>Phone : <A href="tel:+62 211 1213 892">+62 211 1213 892</A></P>
                    <P>Email : <A href="mailto:themaj@mail.com">themaj@mail.com</A></P>
                    <P>
                        <A href="#twitter"> <Twitter /> </A>
                        <A href="#facebook"> <Facebook /> </A>
                        <A href="#instagram"> <Instagram /> </A>
                    </P>
                </ContentContainer>

                <ContentContainer>
                    <Caption>Join Our Family</Caption>
                    <P><A href="#">Careers</A></P>
                    <P><A href="#">Investors</A></P>
                </ContentContainer>

                <ContentContainer>
                    <Caption>Explore Our World</Caption>
                    <P><A href="#">Contact Us</A></P>
                    <P><A href="#">Ancora Capital Management </A></P>
                    <P><A href="#">Media Center </A></P>
                    <P><A href="#">Privacy </A></P>
                    <P><A href="#">Terms and Conditions </A></P>
                </ContentContainer>

                <ContentContainer>
                    <Caption>Sign Up For Exclusive News and Offers</Caption>
                    <SubscribeForm
                    {...this.props}
                    >
                        <ButtonSubmit type='submit'>
                            <b>BOOK</b>
                        </ButtonSubmit>
                    </SubscribeForm>
                    <P2 margin="16px 0 0 0">
                        By entering your details you consent to be contacted via email by the 
                        Belmond group with offers and updates. To opt out, use the unsubscribe
                        link or email themaj@mail.com. 
                    </P2>
                </ContentContainer>
            </Container>
            </>
        )
    }
}
const Container = styled.div`
    margin-top: 53px;
    background: #222222;
    height: auto;
    padding-top: 2px;
    padding-bottom: 3px;
`;
const Caption = styled.h5`
    text-align:left
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-bottom:16px;
`;
const A = styled.a`
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;

    color:#fff;
    margin-right:30px;
    &:hover{
        text-decoration:none;
        color:#fff;
        opacity:.5
    }
`;

const ContentContainer = styled.div(
    props => ({
        margin: "36px 0px",
        padding: props.padding,
    })
)

const P = styled.p(
    props => ({
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "16px",
        lineHeight: "26px",
        color: "#FFFFFF"
    })
)

const Facebook = styled.img.attrs(
    props => ({
        src: Fb,
        alt: "facebook",
        width: props.width,
        height: props.height,
    })
)``

const Twitter = styled.img.attrs(
    props => ({
        src: Twitt,
        alt: "twitter",
        width: props.width,
        height: props.height,
    })
)``

const Instagram = styled.img.attrs(
    props => ({
        src: Inst,
        alt: "instagram",
        width: props.width,
        height: props.height,
    })
)``

const ButtonSubmit = styled.button({
    backgroundColor: "#FEFEFE",
    borderColor: "transparent",
    fontSize: "bold",
    fontWeight: "normal",
    fontSize: "13px",
    lineHeight: "18px",
    textAlign: "center",
    letterSpacing: "2px",
    color: "#232323",
    height: "37px",
    width: "110px",
})

const P2 = styled.p(
    props => ({
    fontSize: "13px",
    fontStyle: "normal",
    fontWeight: "normal",
    lineHeight: "26px",
    color: "#FFFFFF",
    margin: props.margin,
    padding: props.padding
}))

export default MobileFooter
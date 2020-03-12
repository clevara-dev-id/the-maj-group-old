import React, { Component } from 'react'
import styled from 'styled-components'
import LogoFooter from './assets/logoFooter.png'
import TMX from './assets/Brand/BM_TMX.svg'
import { Row, Col, Table } from 'react-bootstrap'
import SubscribeForm from './SubscribeForm'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'


import {
    TMD, TMN, TMS, BNGC, SNGC, Shangrila, Kimpton, TMRB, TMRC, Albatros, Apron, DuJour, PKA, ThePress, TheTerrace, Takumi, TMO, Melia, Cn
} from './assets/Brand'
import { ButtonPrimary } from '..'

export class Footer extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
                <Container>
                    <FooterLogo>
                        <a href="#">
                            <Logo src={LogoFooter} alt="Logo The Maj Group" />
                        </a>
                    </FooterLogo>
                    
                    <BrandFamilyContainer>
                        <FooterSideLogo>
                            <a href="#">
                                <SideLogo src={TMX} alt="The Maj Xperience Logo" />
                            </a>
                        </FooterSideLogo>
                        <Table responsive borderless>
                            <tbody>
                                <tr>
                                    <TD><H5>Signature Destination</H5></TD>
                                    <TD><BrandFamsLogo src={TMD} alt="The Maj Dago" /></TD>
                                    <TD><BrandFamsLogo src={TMN} alt="The Maj Nusa Dua" /></TD>
                                    <TD><BrandFamsLogo src={TMS} alt="The Maj Senayan" /></TD>
                                    <TD></TD>
                                    <TD><H5>Bespoke Cruise</H5></TD>
                                    <TD><BrandFamsLogo src={TMO} alt="The Maj Oceanic" /></TD>
                                    <TD></TD>
                                </tr>
                                <tr>
                                    <TD><H5>Premiere Golf Courses</H5></TD>
                                    <TD colSpan="2"><BrandFamsLogo width="200px" src={BNGC} alt="Bali National Golf Club" /></TD>
                                    <TD colSpan="2"><BrandFamsLogo width="200px" src={SNGC} alt="Senayan National Golf Club" /></TD>
                                    <TD></TD>
                                    <TD></TD>
                                    <TD></TD>
                                    <TD></TD>
                                    <TD></TD>
                                </tr>
                                <tr>
                                    <TD><H5>Luxury Hotels</H5></TD>
                                    <TD><BrandFamsLogo width="100px" src={Shangrila} alt="Shangrila" /></TD>
                                    <TD><BrandFamsLogo width="100px" src={Kimpton} alt="Kimpton" /></TD>
                                    <TD></TD>
                                    <TD></TD>
                                    <TD><H5>Premium Hotels</H5></TD>
                                    <TD><BrandFamsLogo width="100px" src={Melia} alt="Melia Bandung Dago" /></TD>
                                    <TD><BrandFamsLogo width="100px" src={Cn} alt="Cartoon Network" /></TD>
                                </tr>
                                <tr>
                                    <TD><H5>Smart Housing</H5></TD>
                                    <TD><BrandFamsLogo width="100px" src={TMRB} alt="TMRB" /></TD>
                                    <TD><BrandFamsLogo width="100px" src={TMRC} alt="TMRC" /></TD>
                                    <TD></TD>
                                    <TD></TD>
                                    <TD></TD>
                                    <TD></TD>
                                    <TD></TD>
                                </tr>
                                <tr>
                                    <TD><H5>Distictive Lifestyle</H5></TD>
                                    <TD><BrandFamsLogo width="100" src={Albatros} alt="Albatros" /></TD>
                                    <TD><BrandFamsLogo width="100" src={Apron} alt="Apron" /></TD>
                                    <TD><BrandFamsLogo width="100" src={DuJour} alt="DeJour" /></TD>
                                    <TD><BrandFamsLogo width="100" src={PKA} alt="Pizza Kayu Api" /></TD>
                                    <TD><BrandFamsLogo width="100" src={ThePress} alt="The Press" /></TD>
                                    <TD><BrandFamsLogo width="100" src={TheTerrace} alt="The Terrace" /></TD>
                                    <TD><BrandFamsLogo width="100" src={Takumi} alt="Takumi" /></TD>
                                </tr>
                            </tbody>
                        </Table>
                    </BrandFamilyContainer>
                </Container>
                <Footers>
                    <FooterContainer>
                        <Row>
                            <Col sm={12} lg={3}>
                                <Caption>Contact Us</Caption>
                                <Ul>
                                    <Li>Reservation : <A href="tel:021 12312 878">021 12312 878</A></Li>
                                    <Li>Phone : <A href="tel:+62 211 1213 892">+62 211 1213 892</A></Li>
                                    <Li>Email : <A href="mailto:themaj@mail.com">themaj@mail.com</A></Li>
                                </Ul>
                                <div>
                                    <FontAwesomeIcon style={{marginRight:"25px"}} icon={faSearchPlus} />
                                    <FontAwesomeIcon style={{marginRight:"25px"}} icon={faSearchPlus} />
                                    <FontAwesomeIcon style={{marginRight:"25px"}} icon={faSearchPlus} />
                                </div>
                            </Col>
                            <Col sm={12} lg={2}>
                                <Caption>Join Our Family</Caption>
                                <Ul>
                                    <Li><A href="#">Careers</A></Li>
                                    <Li><A href="#">Investors</A></Li>
                                </Ul>
                            </Col>
                            <Col sm={12} lg={3}>
                                <Caption>Explore Our World</Caption>
                                <Ul>
                                    <Li><A href="#">Contact Us</A></Li>
                                    <Li><A href="#">Ancora Capital Management </A></Li>
                                    <Li><A href="#">Media Center </A></Li>
                                    <Li><A href="#">Privacy </A></Li>
                                    <Li><A href="#">Terms and Conditions </A></Li>
                                </Ul>
                            </Col>
                            <Col sm={12} lg>
                                <Caption>Sign Up For Exclusive News and Offers</Caption>
                                <SubscribeForm
                                {...this.props}
                                >
                                    <ButtonPrimary
                                    type='submit'
                                    buttonName="subscribe"
                                    background="#fff"
                                    color="#000"
                                     />
                            </SubscribeForm>
                            </Col>
                        </Row>
                    </FooterContainer>
                </Footers>
            </>
        )
    }
}

const Container = styled.div`
    width:100%;
    padding:130px 71px;
    background: #222222;
    height:auto;
    position:relative;
    display: flex;
    justify-content:center;
`;
const FooterLogo = styled.div`
    position:absolute;
    width:200px;
    z-index:3;
    background: #222222;
    display:flex;
    justify-content:center;
    top:3rem;
`;
const BrandFamsLogo = styled.img`
    width ${props=>props.width||"100px"};
    align-items:center;
`;
const Logo = styled.img`
    width:140px;
    height:auto;
`;
const FooterSideLogo = styled.div`
    position:absolute;
    width:200px;
    z-index:3;
    background: #222222;
    display:flex;
    justify-content:center;
    top: 30rem;
    right: 1rem;
    rotate: 90deg;
`;
const SideLogo = styled.img`
    width:140px;
    height:auto;
`;
const BrandFamilyContainer = styled.div`
    max-width:1250px;
    padding-top: 4rem;
    padding-bottom: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-left:auto;
    margin-right:auto;
    width:100%;
    height:860px;
    border:1px solid #FFFFFF;
    color: #FFF !important;
`;
const TD = styled.td`
    vertical-align:middle !important;
    height: 150px;
`;
const H5 = styled.h5`
    color: #fff;
    font-size:16px;
    text-transform:uppercase;
    width:135px;
    opacity:.6;
`;
const Footers = styled.div`
    background: #222222;
    width: 100%;
    height: auto;
    padding-top: 51px;
    padding-bottom: 71px;
    text-align:left
`;
const FooterContainer = styled.div`
    width:1110px;
    margin-left: auto;
    margin-right: auto;
`;
const Caption = styled.h5`
    text-align:left
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-bottom:26px;
`;
const Li = styled.li`
    margin-top:11px;
`;
const Ul = styled.ul`
    list-style-type: none;
    margin-top: 26;
    padding: 0;
    margin-bottom: 11;
    
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    color: #fff;
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
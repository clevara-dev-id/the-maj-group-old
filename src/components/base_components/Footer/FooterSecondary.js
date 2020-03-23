import React from 'react'
import styled from 'styled-components'
import { Row, Col, Container, Button } from 'react-bootstrap'
import SubscribeForm from './SubscribeForm'
import { Link } from 'react-router-dom'

const ContactUs = 
[{title:"Reservation", link: "telp:02112312878", value: "021 12312 878"},
{title: "Phone", link: "telp:+622111213892", value: "+62 211 1213 892"},
{title: "Email", link: "mailto:themaj@mail.com", value: "themaj@gmail.com"}]

const JoinUs =
[{title: "Careers", link: "#career"},
{title: "Inverstor", link: "#investor"}]

const Explore =
[{title: "Contact Us", link: "#contact-us"},
{title: "Ancora Capital Manajement", link: "#ancora-capital-manajement"},
{title: "Media Center", link: "#media-center"},
{title: "Privacy", link: "#privacy"},
{title: "Terms and Conditions", link: "#terms-and-conditions"}]

export const FooterSecondary = props => {

    
    return (
        <ContainerFooter padding="59px 0 36px 0">
            <Container fluid="md">
                <Row>
                    <Col lg={3} md={4} xs={12}>
                        <H5>Contact Us</H5>
                        {ContactUs.map((d, i) => (
                            <P key={i}> {d.title} <ContactLink href={d.link}> {d.value} </ContactLink> </P>
                        ))}
                    </Col>

                    <Col lg={2} md={4} xs={12}>
                        <H5>Join Our Family</H5>
                        {JoinUs.map((d, i) => (
                            <P key={i}> <CustomLink to={d.link}> {d.title} </CustomLink> </P>
                        ))}
                    </Col>

                    <Col lg={3} md={4} xs={12}>
                        <H5>Explore Our World</H5>
                        {Explore.map((d, i) => (
                            <P key={i}> <CustomLink to={d.link}> {d.title} </CustomLink> </P>
                        ))}
                    </Col>

                    <Col lg={4} md={12} xs={12} style={{padding: 0, margin: 0}}>
                        <H5>Sign Up For Exclusive News & Offers</H5>
                        <div>
                            <SubscribeForm {...props}>
                                <Button variant="light" type="submit"> <h5 style={{padding: 0, margin: 0, letterSpacing: "2px", color: "#000000"}}> DEFAULT </h5> </Button>
                            </SubscribeForm>
                        </div>
                        <P padding="8px 0 0 0">
                            By entering your details you consent to be contacted via email by the Belmond group with offers and updates. To
                            opt out, use the unsubscribe link or email themaj@mail.com. 
                        </P>
                    </Col>
                </Row>
                <P className="text-center mt-4">Copyright 2020 All right reserved</P>
            </Container>
        </ContainerFooter>
    )
}

const ContainerFooter = styled.div(
    props => ({
        margin: props.margin,
        padding: props.padding,
        background: "#232323",
    })
)

const H5 = styled.h5(
    props => ({
        marginBottom: "26px",
        padding: props.padding,
        color: "#FFFFFF",
        textTransform: "uppercase",
    })
) 

const P = styled.p(
    props => ({
        margin: props.margin,
        padding: props.padding,
        color: "#F8F8F8",
    })
)

const ContactLink = styled.a`
    text-decoration: none;
    color: #FFFFFF;
    transition: 0.6s;
    :hover {
        text-decoration: none;
        color: #C4964B;
    }
`;

const CustomLink = styled(Link)`
    text-decoration: none;
    color: #FFFFFF;
    transition: 0.6s;
    :hover {
        text-decoration: none;
        color: #C4964B;
    }
`;

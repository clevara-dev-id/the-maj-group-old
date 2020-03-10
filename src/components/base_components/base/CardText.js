import React from 'react'
import styled from 'styled-components'

export const CardText = (props) => (
    <>
      <Card className={props.className}>
        <h2>{props.title}</h2>
        <P>{props.text}</P>
        <Link href={props.link}>{props.linkName}</Link>
      </Card>
    </>
  )

export const CardTextSecondary = (props) => (  
    <>
      <div className={props.className}>
        <H5>Destination</H5>
        <H1>{props.title}</H1>
        <P>{props.text}</P>
      </div>
    </>
  )

const Card = styled.div`
  width: 920px;
  height: 400px;
  margin: 0px auto;
  padding: 99px 77px;
  background: #FFFFFF;
  border-radius: 2px;
`;
const P = styled.p`
  font-size: 16px;
  line-height: 26px;
  font-weight: normal;
`;
const Link = styled.a`
  color: #000000;
  margin-bottom: 10px;
  padding-bottom: 10px;
  transition: .3s all;
  border-bottom:1px solid #232323;
  &:hover {
    padding-bottom: 8px;
    text-decoration: none;
    color: #000;
  }
`;
const H5 = styled.h5`
  text-transform: uppercase;
  color: #C4964B;
`;
const H1 = styled.h1`
  margin-top: 8px;
  margin-bottom: 24px;
`;
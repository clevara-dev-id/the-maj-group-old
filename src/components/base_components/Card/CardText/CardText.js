import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export const CardText = (props) => (
    <>
      <Card className={props.className} {...props}>
        <h2>{props.title}</h2>
        <P>{props.text}</P>
        <Link href={props.link}>{props.linkName}</Link>
      </Card>
    </>
)

export const CardTextSecondary = (props) => (  
    <>
      <Container className={props.className} {...props}>
      {!props.caption? null : <H5> {props.caption } </H5>}
        <H1>{props.title}</H1>
        <P>{props.text}</P>
      </Container>
    </>
)

CardTextSecondary.defaultProps = {
  caption: "Destination"
}

CardTextSecondary.propTypes = {
  caption: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  title: PropTypes.string,
  text: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
}

const Container = styled.div(
  props => ({
    className: props.className,
    margin: props.margin,
    padding: props.padding,
    width: props.width,
    height: props.height,
  })
)

const Card = styled.div`
  width: 920px;
  height: 400px;
  margin: ${props => props.margin};
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
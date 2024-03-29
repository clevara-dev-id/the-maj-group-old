import React, { Component, Image, Stylesheet } from "react";
import Slider from "react-slick";
import styled from 'styled-components';

import './css/Carousell.css'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, color:"red"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    />
  );
}


class CustomSlide extends Component {
  render() {
    const Card = styled.div`
        position: relative;
        z-index: 1;
        background-color: #0003;
        width: 825px;
        height: 450px;
        `;
    const Card2 = styled.div`
        position: relative;
        z-index: 3;
        background-color: red;
        width: 445px;
        height: 300px;
        margin-top: -35%;
        margin-left: 58.5%;
        margin-bottom: 0px;
        background: #FFFFFF;

        /* shadow-1 */
        box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.03);
        border-radius: 2px;
        `
    const Card3 = styled.div`
        z-index: 4;
        width: 825px;
        height: 450px;
        margin-top: -35%;
        margin-left: 0%;
        background-color: transparent;

        `;
    const Mydiv = styled.div`
        padding: 47px 35px 46.6px 35px;
    `;
    const HeaderTitle = styled.div`
        padding-left: 0px;
        padding-top: 0px;
    `;
    const ContenText = styled.div`
        padding-left: 0px;
        padding-top: 8.6px    
    `;
    const DivButton = styled.div`
        padding-left: 0px;
        padding-bottom: 47px;
    `;
    const ButtonLink = styled.a`
        padding-top: 24px;
        padding-left: 0px;
        padding-bottom: 8px;
        float: left;
        display: block;
        text-decoration: none;
        font-size: 16px;
        color: #000000;
        border-bottom: 2px solid #232323;
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
        line-height: 26px;
        text-align: left;
        transition: .05s all;
        &:hover{
            text-decoration: none;
            color : #000000;
            font-weight : bold;
        }
        
    `;
    const { index, ...props } = this.props;
    return (
      <div {...props}>
        <Card><img src={`${process.env.PUBLIC_URL}${index.source}`} width="825px" height="450px" /></Card>
        <Card2>
            <Mydiv>
              <HeaderTitle><h2>{index.name}</h2></HeaderTitle>
              <ContenText><p>{index.description}</p></ContenText>
              <DivButton><ButtonLink href={index.link}>Discover now</ButtonLink></DivButton>
            </Mydiv>
        </Card2>
        <Card3></Card3>
      </div>
    );
  }
}

class CustomSlideRight extends Component {
  render() {
    const Card = styled.div`
        position: relative;
        z-index: 1;
        width: 1110px;
        height: 450px;
        padding-left: 250px;
        `;
    const Card2 = styled.div`
        position: relative;
        z-index: 3;
        background-color: red;
        width: 445px;
        height: 300px;
        margin-top: -35%;
        margin-left: 0%;
        margin-bottom: 0px;
        background: #FFFFFF;

        /* shadow-1 */
        box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.03);
        border-radius: 2px;
        `
    const Card3 = styled.div`
        z-index: 4;
        width: 1110px;
        height: 450px;
        margin-top: -35%;
        margin-left: 0%;
        background-color: transparent;

        `;
    const Mydiv = styled.div`
        padding: 47px 35px 46.6px 35px;
    `;
    const HeaderTitle = styled.div`
        padding-left: 0px;
        padding-top: 0px;
    `;
    const ContenText = styled.div`
        padding-left: 0px;
        padding-top: 8.6px    
    `;
    const DivButton = styled.div`
        padding-left: 0px;
        padding-bottom: 47px;
    `;
    const ButtonLink = styled.a`
        padding-top: 24px;
        padding-left: 0px;
        padding-bottom: 8px;
        float: left;
        display: block;
        text-decoration: none;
        font-size: 16px;
        color: #000000;
        border-bottom: 2px solid #232323;
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
        line-height: 26px;
        text-align: left;
        transition: .05s all;
        &:hover{
            text-decoration: none;
            color : #000000;
            font-weight : bold;
        }
        
    `;
    const { index, ...props } = this.props;
    return (
      <div {...props}>
        <Card><img src={`${process.env.PUBLIC_URL}${index.source}`} width="825px" height="450px" /></Card>
        <Card2>
            <Mydiv>
              <HeaderTitle><h2>{index.name}</h2></HeaderTitle>
              <ContenText><p>{index.description}</p></ContenText>
              <DivButton><ButtonLink href={index.link}>Discover now</ButtonLink></DivButton>
            </Mydiv>
        </Card2>
        <Card3></Card3>
      </div>
    );
  }
}

export default class CarousellPrimary extends Component {
  constructor(props){
    super(props);

    this.state = {
      localStore: []
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.store, prevState.localStore) {
      return {
        localStore: nextProps.store
      }
    }
  }

  render() {
    let orient="";
    let margin="";
    this.props.orientation === "left" ? orient="Left" : orient="Right";
    this.props.orientation === "left" ? margin="margin-left: -10px" : margin="margin-right: -10px";
    console.log(orient);
    const Divstyle = styled.div` 
            color: #000;
            position: absolute;
            Left: 0px;
            background-color: #366666;
            margin-top: -25px;
        `;
    const DotStyle = styled.ul`
        padding   : 0px;
        margin    : 0px;
        position  : absolute;
        ${orient} : 0px;
        margin-top: -30px;
        font-size : 32px;
        padding-left : 0px;
        margin-top: -23px;
        ${margin};
    `;
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      appendDots: dots => (
        <Divstyle>
          <DotStyle> {dots} </DotStyle>
        </Divstyle>
      ),
      
    };
    return (
      <div className={"container"} id="carouselOverlayPrimary">
        <style dangerouslySetInnerHTML={{__html: `
            .container, .container-lg, .container-md, 
            .container-sm, .container-xl{ width: 1110px; height:450px; }`}} />
        <Slider {...settings}>
            {this.props.orientation==="left" ? 
            this.state.localStore && this.state.localStore.map((data, i) => (
                <CustomSlide index={{
                  source : data.source,
                  name   : data.name,
                  description : data.description,
                  link   : data.link
                }} />
              )
            ) : (
            this.state.localStore && this.state.localStore.map((data, i) =>  (
              <CustomSlideRight 
                  index={{
                  source : data.source,
                  name   : data.name,
                  description : data.description,
                  link   : data.link
                }} 
              />
              )
            ))}
        </Slider>
      </div>
    );
  }
}
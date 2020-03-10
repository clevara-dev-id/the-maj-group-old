import React, { Component, Image, Stylesheet } from "react";
import Slider from "react-slick";
import styled from 'styled-components';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
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
        margin-top: -25%;
        margin-left: 5%;
        `;
        const Card2 = styled.div`
        position: relative;
        z-index: 3;
        background-color: red;
        width: 200px;
        height: 100px;
        margin-top: -25%;
        margin-left: 6%;
        `;
    
    const { index, ...props } = this.props;
    return (
      <div {...props}>
        <Card><img src={index.source} width="825px" height="450px"/></Card>
        <Card2>2-sds</Card2>
        {/* <div><img src={index.source} width="825px" height="450px"/></div>
        <div >
            <Card>
                w3-cardhkhlkhkhlkhklhkhkhkhkkhlkhlkhkh
            </Card> 
        </div> */}

      </div>
    );
  }
}

export default class SimpleSlider extends Component {
  render() {
    const Divstyle = styled.div`
            color: #000;
            position: absolute;
            right: 0px;
            background-color: #366666;
        `;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      appendDots: dots => (
        <Divstyle>
          <ul style={{ margin: "0px", position: 'absolute', right: '0px'}}> {dots} </ul>
        </Divstyle>
      ),
      
    };
    return (
      <div className={"container"}>
        <style dangerouslySetInnerHTML={{__html: `
            .container, .container-lg, .container-md, 
            .container-sm, .container-xl{ width: 1110px; }`}} />
        <Slider {...settings}>
          <CustomSlide index={{
              source:"https://www.pandotrip.com/wp-content/uploads/2016/07/li-Photo-by-Santo-980x572.jpg"
            }} />
        <CustomSlide index={{
              source:"https://www.pandotrip.com/wp-content/uploads/2016/07/li-Photo-by-Santo-980x572.jpg"
            }} />
        </Slider>
      </div>
    );
  }
}

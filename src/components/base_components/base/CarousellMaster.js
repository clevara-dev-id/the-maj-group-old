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
            position: absolute;
            width: 445px;
            height: 300px;
            color: '#833488;
            backgroud:#000;
            border: 5px solid red;
            
            /* white */
            background: #FFFFFF;
            
            /* shadow-1 */
            box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.03);
            border-radius: 2px;
        `;
    const { index, ...props } = this.props;
    return (
      <div {...props}>
        <div><img src={index.source} width="825px" height="450px"/></div>
        <div >
            <Card>
                w3-cardhkhlkhkhlkhklhkhkhkhkkhlkhlkhkh
            </Card> 
        </div>

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

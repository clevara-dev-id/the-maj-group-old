import React, { Component, Image, Stylesheet } from "react";
import Slider from "react-slick";
import styled from 'styled-components';

import '../../css/mobileCarouselOverlap.css'

export default class MobileSliderImageOverlap extends Component {
  constructor(props){
    super(props);

    this.state = {
      localStore: [],
      indexActive: 0,
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
    return (
      <div id="mobile-card-img-overlay" style={{}}>
        <div style={{maxWidth: "345px", maxHeight: "188px", margin: "0 auto", padding: "0"}}>
          <Slider
            autoplay={true}
            autoplaySpeed={2000}
            arrows={false}
            beforeChange={(prev, next) => this.setState({indexActive: next})}
            customPaging={i => (
              <div id="dots" />
            )}
            dots={true}
            infinite={true}
            speed={3000}
            slidesToShow={1}
            slidesToScroll={1}
            swipe={true}
            pauseOnHover={true}
            
          >
              {this.state.localStore && this.state.localStore.map((data, i) =>  (
                <div> 
                  <img src={data.source} style={{width: "345px", height: "188px"}} alt="mobile-image-overlap" />
                </div> 
                )
              )}
          </Slider>
        </div>

        <div style={{display: "flex", flexDirection: "column", margin: "40px auto 0 auto", padding: "0", maxWidth: "344px", maxHeight: "194px"}}>
          {this.state.localStore && this.state.localStore.map((data, i) => {
            if (i === this.state.indexActive) {
              return (
                <>
                  <H2> {data.name} </H2>
                  <P> {data.description} </P>
                  <A padding="0 0 8px 0" href={data.link}>Discover Now</A>
                </>
              )
            }
            return null
          })}
        </div>
      </div>
    );
  }
}

const H2 = styled.h2(
  props => ({
    margin: props.margin,
    padding: props.padding,
  })
)

const P = styled.p(
  props => ({
    margin: props.margin,
    padding: props.padding,
  })
)

const A = styled.a(
  props => ({
    color: "#C4964B",
    borderBottom: "1px solid #C4964B",
    fontStyle: "normal",
    fontSize: "16px",
    fontWeight: "600",
    letterSpacing: "1px",
    lineHeight: "26px",
    margin: props.margin,
    padding: props.padding,
    width: "110px",
  })
)

const Container = styled.div(
  props => ({
    display: "flex", 
    flexDirection: "column", 
    maxHeight: "422px",
    
  })
)
import React, { Component, createRef } from 'react'

// tmp img
import HeadBackground from '../Assets/Image/Occasions/Background.png'

// dummy image
import background from '../Assets/tmp/CardImage.png'
import backgroundLarge from '../Assets/tmp/CardImageLarge.png'
import backgroundSmall from '../Assets/tmp/CardImage.png'

import { 
  PrimaryArticle, 
  SecondaryArticle, 
  SmallArticle,
  CardImage,
  CardImageLarge,
  CardImageTopDown,
  CardSix,
  CardItem,
  CardText,
  CardTextSecondary,
  CardVideo,
  
  CarousellPrimary,
  CarousellSecondary,
  SliderCardSix,
  SliderCardImageTopDown,

  Title,
  TitlePage,
  NavigationBar,
  HeadComponent,
  device,
  Footer,
  FooterSecondary,

  MobileCardImage, 
  MobileCardImageLarge, 
  MobileCardImageTopDown,
  MobileSliderImageOverlap,
  MobilePortfolioVideo,
} from '../components/base_components'

//CSS
import '../Assets/tmp/css/occasions.css'

import { layoutGenerator } from 'react-break';

import { dataOccasionsPage } from '../services/dummyData'

const layout = layoutGenerator({
  mobile: 0,
  tablet: 768,
  desktop: 992,
});
const OnMobileAndTablet = layout.isAtMost('tablet');
const OnDesktop = layout.is('desktop');

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      footer: {
        validated: true,
        data: []
      }
    }
    this.footreftitle = createRef()
    this.footrefemail = createRef()

    this._footer = this._footer.bind(this)
  }
  _footer = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      this.setState({footer:{validated:false}});
      e.preventDefault();
      e.stopPropagation();
    }

    const data = {
      title: this.footreftitle.current.value,
      name: this.footrefname.current.value,
      email: this.footrefemail.current.value
    }
    this.setState({
      footer: {
        data: data
      }
    })
    e.preventDefault()
  }

  render(){   
    return(
      <div id="occasions">
        <NavigationBar />
        <HeadComponent bg={HeadBackground} text="Occasions" />

        <section>
            <div className="container">
                <TitlePage name="OCCASIONS" marginLeft="91px" />
            </div>
        </section>

        <section>
            <div className="container" id="topcard">
              <CardTextSecondary
                caption={false}
                title={dataOccasionsPage[0].cardtext.title}
                text={dataOccasionsPage[0].cardtext.text}
                className="text-center"
                margin="92px auto 80px auto"
                width="920px"
              />
            </div>
        </section>

        <section>
            <div className="container" id="imageTopDown">
              <CardImageTopDown
                margin="124px 0px"
                store={dataOccasionsPage[0].cardImageTopDown}
              />
            </div>
          </section>

          <section>
            <div className="container">
              <CarousellPrimary
                margin="80px auto 96px auto"
                store={dataOccasionsPage[0].carousel}
                orientation="left"
                arrowColor ="#C4964B"
                dotColor ="#C4964B"
                center ="true"
              />
            </div>
          </section>

          <section>
            <div className="container" id="cardImageOccatons">
              <CardImage
                caps="Destination"
                title={dataOccasionsPage[0].meetings.title}
                text={dataOccasionsPage[0].meetings.text}
                link="#linkTo"
                buttonName="View More"
                background={dataOccasionsPage[0].meetings.image}
                reverse
              />
            </div>
          </section>

          <section>
            <div className="container" id="cardVideoOccations">
                <CardVideo
                    containerPadding="100px auto 142px auto"
                    store={dataOccasionsPage[0].weddings.video} 
                    textAlign="left"
                    buttonName="View More"
                    poster={dataOccasionsPage[0].weddings.poster}
                />
            </div>
          </section>

        <footer>
            <FooterSecondary
                validated={this.state.footer.validated}
                onSubmit={this._footer}
                titleRef={this.footreftitle}
                nameRef={this.footrefname}
                emailRef={this.footrefemail}
            />
        </footer>
      </div>
    )
  }
}

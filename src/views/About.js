import React, { Component, createRef } from 'react'

// tmp img
import HeadBackground from '../Assets/Image/About/Background.png'

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
  
  MobileCardImage, 
  MobileCardImageLarge, 
  MobileCardImageTopDown,
  MobileSliderImageOverlap,
  MobilePortfolioVideo,
} from '../components/base_components'

import { layoutGenerator } from 'react-break';

import { dataAboutPage } from '../services/dummyData'

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
      <div id="about">
        <NavigationBar />
        <HeadComponent bg={HeadBackground} text="About" />

        <section>
            <div className="container">
                <TitlePage name="ABOUT" marginLeft="91px" />
            </div>
        </section>
        <section>
            <div className="container">
                <div style={{marginTop : "38px"}}></div>
                <SmallArticle 
                    align="center"
                    caption = "OUR STORY"
                    title ={dataAboutPage[0].article.title}
                    firstParagraph ={dataAboutPage[0].article.firstParagraph}
                    image={dataAboutPage[0].article.image}
                    alt="background"
                    secondParagraph={dataAboutPage[0].article.secondParagraph}
                />
            </div>
        </section>

        <section>
            <div className="container">
              <CardSix
                containerStyle={{margin: "145px 0"}}
                className="container"
                store={[
                  {
                    id: 1,
                    image: dataAboutPage[0].siximage.image1,
                    head: "Hotel"
                  },
                  {
                    id: 2,
                    image: dataAboutPage[0].siximage.image2,
                    head: "Phinisi Cruise"
                  },
                  {
                    id: 3,
                    image: dataAboutPage[0].siximage.image3,
                    head: "Residential"
                  },
                  {
                    id: 4,
                    image: dataAboutPage[0].siximage.image4,
                    head: "Golf"
                  },
                  {
                    id: 5,
                    image: dataAboutPage[0].siximage.image5,
                    head: "Restaurant"
                  },
                  {
                    id: 6,
                    image: dataAboutPage[0].siximage.image6,
                    head: "Entertainment"
                  }
                ]}
              />
            </div>
          </section>

          <section>
            <div className="container">
              <Title 
                text="Our Philosophy"
                image="http://timpietrusky.com/cdn/army.png"
                margin="92px 0px 0px 0px"
              />
            </div>
          </section>

          <section>
            <div className="container">
              <CardImageLarge 
                caption="OUR PHILOSOPHY"
                title={dataAboutPage[0].philosophy.title}
                text={dataAboutPage[0].philosophy.text}
                link="#linkTo"
                btn={false}
                background={dataAboutPage[0].philosophy.image}
                reverse={true}
              />
            </div>
          </section>
     
          <section>
            <div className="container" align="right">
              <Title 
                text="Sustainability"
                image="http://timpietrusky.com/cdn/army.png"
                margin="79px 0px 90px 0px"
              />
            </div>
          </section>

          <section>
            <div className="container">
              <CardImageLarge 
                caption="sustainability"
                title={dataAboutPage[0].sustainability.title}
                text={dataAboutPage[0].sustainability.text}
                link="#linkTo"
                btn={false}
                background={dataAboutPage[0].sustainability.image}
                reverse={false}
              />
            </div>
          </section>


          <section>
            <footer>
              <Footer />
            </footer>
          </section>
      </div>
    )
  }
}

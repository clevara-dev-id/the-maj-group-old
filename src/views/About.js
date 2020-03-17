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
  NavigationBar,
  HeadComponent,
  device,
  
  MobileCardImage, 
  MobileCardImageLarge, 
  MobileCardImageTopDown,
  MobileSliderImageOverlap,
  MobilePortfolioVideo,
} from '../components/base_components'



import { layoutGenerator } from 'react-break';

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
        data: {}
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

        <OnDesktop>
            <section>
                <div className="container">
                    <div style={{marginTop : "38px"}}></div>
                    <SmallArticle 
                        align="center"
                        caption = "OUR STORY"
                        title ="Tester lorem ipsum"
                        firstParagraph ="Sint anim sunt incididunt aute labore. Cupidatat incididunt aliquip cillum minim sunt reprehenderit nostrud elit qui minim laboris. Aliquip pariatur laborum officia mollit mollit cillum esse. Culpa incididunt veniam sint ex. Deserunt et id anim culpa ullamco nostrud laborum ea consequat est et pariatur eu. Non Lorem sint nulla Lorem dolor et occaecat pariatur magna proident aliqua ut proident id.
                        Amet pariatur veniam non Lorem sunt aliquip. Aute ipsum adipisicing sint proident ad nostrud minim labore ex adipisicing voluptate occaecat aliqua. Dolor ea reprehenderit occaecat dolore sunt."
                        image={backgroundSmall}
                        alt="background"
                        secondParagraph="Sint anim sunt incididunt aute labore. Cupidatat incididunt aliquip cillum minim sunt reprehenderit nostrud elit qui minim laboris. Aliquip pariatur laborum officia mollit mollit cillum esse. Culpa incididunt veniam sint ex. Deserunt et id anim culpa ullamco nostrud laborum ea consequat est et pariatur eu. Non Lorem sint nulla Lorem dolor et occaecat pariatur magna proident aliqua ut proident id.
                        Amet pariatur veniam non Lorem sunt aliquip. Aute ipsum adipisicing sint proident ad nostrud minim labore ex adipisicing voluptate occaecat aliqua. Dolor ea reprehenderit occaecat dolore sunt. Sint anim sunt incididunt aute labore. Cupidatat incididunt aliquip cillum minim sunt reprehenderit nostrud elit qui minim laboris. Aliquip pariatur laborum officia mollit mollit cillum esse. Culpa incididunt veniam sint ex. Deserunt et id anim culpa ullamco nostrud laborum ea consequat est et pariatur eu. Non Lorem sint nulla Lorem dolor et occaecat pariatur magna proident aliqua ut proident id."
                    />
                </div>
            </section>
        </OnDesktop>

      </div>
    )
  }
}

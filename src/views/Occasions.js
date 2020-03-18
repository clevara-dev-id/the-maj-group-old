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

//CSS
import '../Assets/tmp/css/about.css'

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
        <HeadComponent bg={HeadBackground} text="Occasions" />

        <section>
            <div className="container">
                <TitlePage name="OCCASIONS" marginLeft="91px" />
            </div>
        </section>

        <section>
            <div className="container">
              <CardTextSecondary
                title="Lorem Ipsum Dolor Sit Amer"
                text="From timeless icons in buzzing cities to tranquil retreats in hidden corners, The maj offers unforgettable travel experiences in pioneering destinations across the globe."
                className="text-center"
                margin="92px auto 80px auto"
                width="920px"
              />
            </div>
        </section>

        <section>
            <div className="container">
              <CardImageTopDown
                margin="124px 0px"
                store={[
                  {
                    id: 1,
                    caps: "Jakarta",
                    head: "Senayan",
                    desc: "Hemmed by jungle and lulled by the lap of the Indian Ocean, the hotel is rich in island spirit",
                    image: background,
                    link: "#link1"
                  },{
                    id: 2,
                    caps: "Bandung",
                    head: "Dago",
                    desc: "Hemmed by jungle and lulled by the lap of the Indian Ocean, the hotel is rich in island spirit",
                    image: background,
                    link: "#link2"
                  },{
                    id: 3,
                    caps: "Bali",
                    head: "Nusa Dua",
                    desc: "Hemmed by jungle and lulled by the lap of the Indian Ocean, the hotel is rich in island spirit",
                    image: background,
                    link: "#link3"
                  }
                ]}
              />
            </div>
          </section>

          <section>
            <div className="container">
              <CarousellPrimary
                margin="80px auto 96px auto"
                store={[
                  {
                    id: 1,
                    source: background,
                    name: "Hotel",
                    description: "Esse tempor qui enim ut aute cupidatat in dolor magna irure voluptate consequat Lorem. Occaecat ad adipisicing enim Lorem minim ea elit exercitation dolor et ad consequat aliqua.",
                    link: "#linkTo"
                  },
                  {
                    id: 2,
                    source: background,
                    name: "Rumah",
                    description: "Esse tempor qui enim ut aute cupidatat in dolor magna irure voluptate consequat Lorem. Occaecat ad adipisicing enim Lorem minim ea elit exercitation dolor et ad consequat aliqua.",
                    link: "#linkTo"
                  },
                  {
                    id: 3,
                    source: background,
                    name: "Restaurant",
                    description: "Esse tempor qui enim ut aute cupidatat in dolor magna irure voluptate consequat Lorem. Occaecat ad adipisicing enim Lorem minim ea elit exercitation dolor et ad consequat aliqua.",
                    link: "#linkTo"
                  }
                ]}
                orientation="left"
              />
            </div>
          </section>

          <section>
            <div className="container">
              <CardImage
                caps="Destination"
                title="RAJA AMPAT ISLAND"
                text="Hemmed by jungle and lulled by the lap of the Indian Ocean, the hotel is rich in island spirit"
                link="#linkTo"
                buttonName="View More"
                background={background}
                reverse
              />
            </div>
          </section>
          <section>
            <div className="container">
              <CardImage
                caps="Philosophy"
                title="The Maj is deeply respectful of its communities and their surroundings"
                text="Sunt excepteur laborum reprehenderit duis sunt fugiat eu dolore. Laborum mollit nostrud quis proident esse cillum sint laboris in deserunt eu consectetur ad adipisicing. Mollit nulla in quis nisi elit occaecat eu dolore aliquip."
                link="#linkTo"
                buttonName="Learn More"
                btnClassName="float-right"
                background={background}
                imageWidth="540px"
                imageHeight="400px"
                contentWidth="1110px"
                contentHeight="400px"
                colContentSize={6}
                colImageSize={6}
                contentStyle={{margin: "auto 0"}}
                containerPadding="150px 0"
                // margin="150px 0 0 0"
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

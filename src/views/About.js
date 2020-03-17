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

        {/* <section>
          <OnDesktop>
              <PortfolioVideo />
          </OnDesktop>

          <OnMobileAndTablet>
            <MobilePortfolioVideo />
          </OnMobileAndTablet>
        </section> */}

        {/* <section>
          <OnDesktop>
            <CardImage
              title="RAJA AMPAT ISLAND"
              text="Hemmed by jungle and lulled by the lap of the Indian Ocean, the hotel is rich in island spirit"
              link="#linkTo"
              buttonName="View More"
              btnClassName="float-right"
              background={background}
              reverse={false}
            />
          </OnDesktop>

          <OnMobileAndTablet>
            <MobileCardImage
              store={[
                {
                  id: 1,
                  title: "Raja Ampat Island",
                  text: "Hemmed by jungle and lulled by the lap of the Indian Ocean, the hotel is rich in island spirit",
                  link: "#linkTo1",
                  background: background
                },{
                  id: 2,
                  title: "Komodo Island",
                  text: "Hemmed by jungle and lulled by the lap of the Indian Ocean, the hotel is rich in island spirit",
                  link: "#linkTo2",
                  background: background
                }
              ]}
            />
          </OnMobileAndTablet>
        </section> */}
        
        {/* <OnDesktop>
          <Title 
            text="Occasions & Offers"
            image="http://timpietrusky.com/cdn/army.png"
          />
        </OnDesktop> */}

        {/* <section>
          <OnDesktop>
            <CardImageLarge 
              caption="occasions"
              title="Idyllic Honeymoons"
              text="Reprehenderit enim exercitation eu laboris ea deserunt sunt proident. Ut officia aliqua voluptate commodo magna officia Lorem dolor consectetur eiusmod do enim est exercitation."
              link="#linkTo"
              buttonName="View More"
              background={backgroundLarge}
              reverse={false}
            />
          </OnDesktop>

          <OnMobileAndTablet>
            <MobileCardImageLarge
              store={[
                {
                  id: 1,
                  caption: "occasions",
                  title: "Idyllic Honeymoons",
                  text:"Reprehenderit enim exercitation eu laboris ea deserunt sunt proident. Ut officia aliqua voluptate commodo magna officia Lorem dolor consectetur eiusmod do enim est exercitation.",
                  link: "#link1",
                  background: backgroundLarge
                },
                {
                  id: 2,
                  caption: "occasions",
                  title: "Idyllic Honeymoons",
                  text: "Reprehenderit enim exercitation eu laboris ea deserunt sunt proident. Ut officia aliqua voluptate commodo magna officia Lorem dolor consectetur eiusmod do enim est exercitation.",
                  link: "#link2",
                  background: backgroundLarge,
                }
              ]}
            />
          </OnMobileAndTablet>
        </section> */}

        {/* <CardText
          title="Our Story"
          text="Aliquip officia amet dolore occaecat labore minim qui laborum. Cupidatat adipisicing sit anim proident do labore adipisicing deserunt excepteur laboris. Reprehenderit commodo veniam aliqua mollit irure sit sunt anim mollit eu ullamco reprehenderit ullamco laborum. Voluptate dolore consequat sit incididunt proident consequat laborum officia. Exercitation ut ex non anim labore est Lorem labore anim sit enim consectetur reprehenderit ipsum." 
          link="#linkTo" 
          linkName="Read More"
          className="text-center"
        />
        <CardTextSecondary
          title="Lorem Ipsum Dolor Sit Amer"
          text="From timeless icons in buzzing cities to tranquil retreats in hidden corners, The maj offers unforgettable travel experiences in pioneering destinations across the globe."
          className="text-right"
        /> */}

        {/* <Title 
          text="Occasions & Offers"
          image="http://timpietrusky.com/cdn/army.png"
        /> */}

        {/* <CardImage
          title="RAJA AMPAT ISLAND"
          text="Hemmed by jungle and lulled by the lap of the Indian Ocean, the hotel is rich in island spirit"
          link="#linkTo"
          buttonName="View More"
          btnClassName="float-right"
          background={background}
          reverse={false}
        />

        <CardImage
          title="RAJA AMPAT ISLAND"
          text="Hemmed by jungle and lulled by the lap of the Indian Ocean, the hotel is rich in island spirit"
          link="#linkTo"
          buttonName="View More"
          background={background}
          reverse={true}
        />

        <CardImageLarge 
          caption="occasions"
          title="Idyllic Honeymoons"
          text="Reprehenderit enim exercitation eu laboris ea deserunt sunt proident. Ut officia aliqua voluptate commodo magna officia Lorem dolor consectetur eiusmod do enim est exercitation."
          link="#linkTo"
          buttonName="View More"
          background={backgroundLarge}
          reverse={false}
        />
        <CardImageLarge 
          caption="occasions"
          title="Idyllic Honeymoons"
          text="Reprehenderit enim exercitation eu laboris ea deserunt sunt proident. Ut officia aliqua voluptate commodo magna officia Lorem dolor consectetur eiusmod do enim est exercitation."
          link="#linkTo"
          buttonName="View More"
          background={backgroundLarge}
          reverse={true}
        /> */}

        <SmallArticle 
          align="center"
          caption = "test"
          title ="Tester lorem ipsum"
          firstParagraph ="Sint anim sunt incididunt aute labore. Cupidatat incididunt aliquip cillum minim sunt reprehenderit nostrud elit qui minim laboris. Aliquip pariatur laborum officia mollit mollit cillum esse. Culpa incididunt veniam sint ex. Deserunt et id anim culpa ullamco nostrud laborum ea consequat est et pariatur eu. Non Lorem sint nulla Lorem dolor et occaecat pariatur magna proident aliqua ut proident id.
          Amet pariatur veniam non Lorem sunt aliquip. Aute ipsum adipisicing sint proident ad nostrud minim labore ex adipisicing voluptate occaecat aliqua. Dolor ea reprehenderit occaecat dolore sunt."
          image={backgroundSmall}
          alt="background"
          secondParagraph="Sint anim sunt incididunt aute labore. Cupidatat incididunt aliquip cillum minim sunt reprehenderit nostrud elit qui minim laboris. Aliquip pariatur laborum officia mollit mollit cillum esse. Culpa incididunt veniam sint ex. Deserunt et id anim culpa ullamco nostrud laborum ea consequat est et pariatur eu. Non Lorem sint nulla Lorem dolor et occaecat pariatur magna proident aliqua ut proident id.
          Amet pariatur veniam non Lorem sunt aliquip. Aute ipsum adipisicing sint proident ad nostrud minim labore ex adipisicing voluptate occaecat aliqua. Dolor ea reprehenderit occaecat dolore sunt. Sint anim sunt incididunt aute labore. Cupidatat incididunt aliquip cillum minim sunt reprehenderit nostrud elit qui minim laboris. Aliquip pariatur laborum officia mollit mollit cillum esse. Culpa incididunt veniam sint ex. Deserunt et id anim culpa ullamco nostrud laborum ea consequat est et pariatur eu. Non Lorem sint nulla Lorem dolor et occaecat pariatur magna proident aliqua ut proident id."
        />

        
        {/* <CardSix
          className="container"
          store={[
            {
              id: 1,
              image: background,
              head: "Hotel"
            },
            {
              id: 2,
              image: background,
              head: "Phinisi Cruise"
            },
            {
              id: 3,
              image: background,
              head: "Residential"
            },
            {
              id: 4,
              image: background,
              head: "Golf"
            },
            {
              id: 5,
              image: background,
              head: "Restaurant"
            },
            {
              id: 6,
              image: background,
              head: "Entertainment"
            }
          ]}
        /> */}


        

        {/* <OnDesktop>
          <div className="container">
            <SliderCardImageTopDown 
              store={[
                {
                  id: 1,
                  image: background,
                  head: "Hotel"
                },
                {
                  id: 2,
                  image: background,
                  head: "Phinisi Cruise"
                },
                {
                  id: 3,
                  image: background,
                  head: "Residential"
                },
                {
                  id: 4,
                  image: background,
                  head: "Golf"
                },
                {
                  id: 5,
                  image: background,
                  head: "Restaurant"
                },
                {
                  id: 6,
                  image: background,
                  head: "Entertainment"
                }
              ]}
            />
          </div>
        </OnDesktop> */}
      </div>
    )
  }
}

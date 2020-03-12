import React, { Component } from 'react'

// dummy image
import background from '../Assets/tmp/CardImage.png'
import backgroundLarge from '../Assets/tmp/CardImageLarge.png'
import backgroundSmall from '../Assets/tmp/CardImage.png'

import CustomArrows from '../components/base_components/base/CarousellMaster'
import { 
  ButtonPrimary, 
  ButtonPrimaryDisable,
  ButtonSecondary,
  ButtonSecondaryDisable,
  ButtonOutline,
  ButtonOutlineDisable,
  ButtonPrimarySmall, 
  ButtonPrimarySmallDisable,
  ButtonSecondarySmall,
  ButtonSecondarySmallDisable,
  ButtonOutlineSmall,
  ButtonOutlineSmallDisable,
  CarousellPrimary,
  CardText,
  CardTextSecondary,
  Title,
  CardImageLarge,
  CardImage,
  PrimaryArticle,
  SecondaryArticle,
  SmallArticle,
  NavigationBar,
} from '../components/base_components/base'

import CardImageTopDown from '../components/base_components/base/cardImageTopDown/CardImageTopDown'
import SliderCardImageTopDown from '../components/base_components/base/cardImageTopDown/SliderCardImageTopDown'
import CardSix from '../components/base_components/base/cardSix/CardSix'


import { layoutGenerator } from 'react-break';
import MobileCardImageTopDown from '../components/base_components/base/cardImageTopDown/mobile/CardImageTopDown'
import PortfolioVideo from '../components/base_components/base/portfolio/PortfolioVideo'
import MobileImageOverlap from '../components/base_components/base/ImageOverlap/mobile/ImageOverlap'
import MobilePortfolioVideo from '../components/base_components/base/portfolio/mobile/PortfolioVideo'
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

    }
  }

  render(){
    return(
      <div id="home">
        {/* <NavigationBar /> */}
        
        <section>
          <OnDesktop>
              <CarousellPrimary
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
              />
          </OnDesktop>

          <OnMobileAndTablet>
            <div className="container">
              <MobileImageOverlap
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
              />
            </div>
          </OnMobileAndTablet>
        </section>

        <section>
          <OnDesktop>
                <CardImageTopDown
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
          </OnDesktop>

          <OnMobileAndTablet>
            <div className="container" style={{display: "flex", flexDirection: "column", justifyContent: "space-arround", marginTop: "371px"}}>
              <MobileCardImageTopDown
                caps="Jakarta"
                head="Senayan"
                image={background}
                desc="Hemmed by jungle and lulled by the lap of the Indian Ocean, the hotel is rich in island spirit"
              />
              <MobileCardImageTopDown
                containerStyle={{marginTop: "80px"}}
                caps="Bandung"
                head="Dago"
                image={background}
                desc="Hemmed by jungle and lulled by the lap of the Indian Ocean, the hotel is rich in island spirit"
              />
              <MobileCardImageTopDown
                containerStyle={{marginTop: "80px"}}
                caps="Bali"
                head="Nusa Dua"
                image={background}
                desc="Hemmed by jungle and lulled by the lap of the Indian Ocean, the hotel is rich in island spirit"
              />
            </div>
          </OnMobileAndTablet>
        </section>

        <section>
          <OnDesktop>
              <PortfolioVideo />
          </OnDesktop>

          <OnMobileAndTablet>
            <MobilePortfolioVideo />
          </OnMobileAndTablet>
        </section>

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

        {/* <SmallArticle 
          caption = "test"
          title ="Tester lorem ipsum"
          firstParagraph ="Sint anim sunt incididunt aute labore. Cupidatat incididunt aliquip cillum minim sunt reprehenderit nostrud elit qui minim laboris. Aliquip pariatur laborum officia mollit mollit cillum esse. Culpa incididunt veniam sint ex. Deserunt et id anim culpa ullamco nostrud laborum ea consequat est et pariatur eu. Non Lorem sint nulla Lorem dolor et occaecat pariatur magna proident aliqua ut proident id.
          Amet pariatur veniam non Lorem sunt aliquip. Aute ipsum adipisicing sint proident ad nostrud minim labore ex adipisicing voluptate occaecat aliqua. Dolor ea reprehenderit occaecat dolore sunt."
          image={backgroundSmall}
          alt="background"
          secondParagraph="Sint anim sunt incididunt aute labore. Cupidatat incididunt aliquip cillum minim sunt reprehenderit nostrud elit qui minim laboris. Aliquip pariatur laborum officia mollit mollit cillum esse. Culpa incididunt veniam sint ex. Deserunt et id anim culpa ullamco nostrud laborum ea consequat est et pariatur eu. Non Lorem sint nulla Lorem dolor et occaecat pariatur magna proident aliqua ut proident id.
          Amet pariatur veniam non Lorem sunt aliquip. Aute ipsum adipisicing sint proident ad nostrud minim labore ex adipisicing voluptate occaecat aliqua. Dolor ea reprehenderit occaecat dolore sunt. Sint anim sunt incididunt aute labore. Cupidatat incididunt aliquip cillum minim sunt reprehenderit nostrud elit qui minim laboris. Aliquip pariatur laborum officia mollit mollit cillum esse. Culpa incididunt veniam sint ex. Deserunt et id anim culpa ullamco nostrud laborum ea consequat est et pariatur eu. Non Lorem sint nulla Lorem dolor et occaecat pariatur magna proident aliqua ut proident id."
        /> */}

        
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
import React, { Component, createRef } from 'react'

// tmp img
import HeadBackground from '../Assets/tmp/headBg.png'

// dummy image
import background from '../Assets/tmp/CardImage.png'
import background2 from '../Assets/tmp/CardImagePhilosoph.svg'
import backgroundLarge from '../Assets/tmp/CardImageLarge.svg'
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

  PortfolioVideo,

  Title,
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

import MobileCardTextSecondary from '../components/base_components/MobileCard/CardText/MobileCardTextSecondary'
import { MobileTitle } from '../components/base_components/MobileDivider/Title'
import MobileCardTextPrimary from '../components/base_components/MobileCard/CardText/MobileCardTextPrimary'
import MobileCardSix from '../components/base_components/MobileCard/CardSix/CardSix'
import MobileFooter from '../components/base_components/MobileFooter/MobileFooter'
import BreadcrumbHook from '../components/base_components/Breadcrum'
import { OnDesktop, OnMobileAndTablet } from '../constants/Breakpoint'
import Base from './Base'


export default class Home extends Base {
  render(){
    return(
      <div id="home">
        <OnDesktop>
          <section>
            <div className="container">
              <CardTextSecondary
                title="Lorem Ipsum Dolor Sit Amer"
                text="From timeless icons in buzzing cities to tranquil retreats in hidden corners, The maj offers unforgettable travel experiences in pioneering destinations across the globe."
                className="text-center"
                margin="92px auto 80px auto"
                width="920px"
              />
              
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
              <PortfolioVideo
                margin="152px 0px"
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
                btnClassName="float-right"
                background={background}
                margin="174px 0 0 0"
                textAlign="right"
              />

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
            <div className="container" align="right">
              <Title 
                text="Occasions & Offers"
                image="http://timpietrusky.com/cdn/army.png"
                margin="79px 0px 90px 0px"
              />
            </div>
          </section>

          <section>
            <div className="container">
              <CardImageLarge 
                caption="occasions"
                title="Idyllic Honeymoons"
                text="Reprehenderit enim exercitation eu laboris ea deserunt sunt proident. Ut officia aliqua voluptate commodo magna officia Lorem dolor consectetur eiusmod do enim est exercitation."
                link="#linkTo"
                buttonName="View More"
                background={backgroundLarge}
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
            </div>
          </section>

          <section>
            <div className="container">
              <Title 
                text="About Us"
                image="http://timpietrusky.com/cdn/army.png"
                margin="92px 0px"
              />
            </div>
          </section>

          <section>
            <div className="container">
              <CardText
                title="Our Story"
                text="Aliquip officia amet dolore occaecat labore minim qui laborum. Cupidatat adipisicing sit anim proident do labore adipisicing deserunt excepteur laboris. Reprehenderit commodo veniam aliqua mollit irure sit sunt anim mollit eu ullamco reprehenderit ullamco laborum. Voluptate dolore consequat sit incididunt proident consequat laborum officia. Exercitation ut ex non anim labore est Lorem labore anim sit enim consectetur reprehenderit ipsum." 
                link="#linkTo" 
                linkName="Read More"
                className="text-center"
                margin="150px auto"
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
                background={background2}
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

              <CardImage
                caps="Philosophy"
                title="The Maj is deeply respectful of its communities and their surroundings"
                text="Sunt excepteur laborum reprehenderit duis sunt fugiat eu dolore. Laborum mollit nostrud quis proident esse cillum sint laboris in deserunt eu consectetur ad adipisicing. Mollit nulla in quis nisi elit occaecat eu dolore aliquip."
                link="#linkTo"
                buttonName="Learn More"
                background={background2}
                imageWidth="540px"
                imageHeight="400px"
                contentWidth="1113px"
                contentHeight="400px"
                colContentSize={6}
                colImageSize={6}
                contentStyle={{margin: "auto 0"}}
                containerPadding="150px 0"
                reverse
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
          </section>
        </OnDesktop>
        
        <OnMobileAndTablet>
          <section>
            <div className="container">
              <MobileCardTextSecondary 
                title="lorem ipsum dolor sit amet"
                text="From timeless icons in buzzing cities to tranquil retreats in hidden corners, The maj offers unforgettable travel experiences in pioneering destinations across the globe."
                margin="28px 0"
              />

              <MobileTitle 
                text="Destination" 
                image={background}
                margin="38px 0px 49px 0px" 
                textAlign="right"
              />
            </div>
          </section>
          
          <section>
            <div className="container">
              <MobileSliderImageOverlap
                margin="0 0 71px 0"
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
          </section>

          <section>
            <div className="container">
              <MobileCardImageTopDown
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
              <MobilePortfolioVideo
                margin="71px auto 37px auto"
              />
            </div>
          </section>

          <section>
            <div className="container">
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
            </div>
          </section>

          <section>
            <div className="container">
              <MobileTitle
                image={background}
                text="Occasions & Offers"
                textAlign="right"
              />
            </div>
          </section>

          <section>
            <div className="container">
              <MobileCardImageLarge
                store={[
                  {
                    id: 1,
                    caption: "occasions",
                    title: "Exclusive Savings",
                    text:"Book in advance and enjoy great savings. It’s the perfect excuse for an unforgettable adventure.",
                    list: ["Luxury accommodation", "Booking conditions apply"],
                    link: "#link1",
                    background: backgroundLarge
                  },
                  {
                    id: 2,
                    caption: "offers",
                    title: "Idyllic Honeymoons",
                    text: "Reprehenderit enim exercitation eu laboris ea deserunt sunt proident. Ut officia aliqua voluptate commodo magna officia Lorem dolor consectetur eiusmod do enim est exercitation.",
                    link: "#link2",
                    background: backgroundLarge,
                  }
                ]}
              />
            </div>
          </section>

          <section>
            <div className="container">
              <MobileTitle
                image={background}
                text="About Us"
                textAlign="right"
                margin="0px 0px 39px 0px"
              />
            </div>
          </section>

          <section>
            <div className="container">
              <MobileCardTextPrimary 
                title="Our Story"
                text="Aliquip officia amet dolore occaecat labore minim qui laborum. Cupidatat adipisicing sit anim proident do labore adipisicing deserunt excepteur laboris. Reprehenderit commodo veniam aliqua mollit irure sit sunt anim mollit eu ullamco reprehenderit ullamco laborum. Voluptate dolore consequat sit incididunt proident consequat laborum officia. Exercitation ut ex non anim labore est Lorem labore anim sit enim consectetur reprehenderit ipsum." 
                link="#linkTo"
                linkName="Read More"
              />
            </div>
          </section>

          <section>
            <div className="container">
              <MobileCardImage
                textAlign="left"
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
                  }]}
                />
            </div>
          </section>

          <section>
            <div className="container">
              {/* <MobileTitle
              /> */}
            </div>
          </section>

          <section>
            <div className="container">
              <MobileCardSix
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
                ]}
              />
            </div>
          </section>
        </OnMobileAndTablet>
      </div>
    )
  }
}
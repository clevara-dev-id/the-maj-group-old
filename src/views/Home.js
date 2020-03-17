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
    this.scrolY = createRef()

    this._footer = this._footer.bind(this)
  }

  _onScroll(ref) {
    ref.current.scrollIntoView({behavior: "smooth"})
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
      <div id="home">
        {/* <NavigationBar /> */}

        <HeadComponent bg={HeadBackground} text="An Epicurean Journey of the Ages" />
        
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

          <section>
            <footer>
              <Footer />
            </footer>
          </section>
        </OnDesktop>
        {/* <OnMobileAndTablet>
          <div className="container">
            <MobileSliderImageOverlap
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
        </OnMobileAndTablet> */}
        <section>

          <OnMobileAndTablet>
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
          </OnMobileAndTablet>
        </section>

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

        {/* <Title 
          text="Occasions & Offers"
          image="http://timpietrusky.com/cdn/army.png"
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
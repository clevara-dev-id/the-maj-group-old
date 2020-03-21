import React from 'react'
import Base from './Base'
import { connect } from 'react-redux'
import { setHeadBackground, setFooter } from '../redux/action/actionCreators'

// tmp img
import HeadBackground from '../Assets/Image/About/Background.png'
// dummy image
import background from '../Assets/tmp/CardImage.png'
import backgroundLarge from '../Assets/tmp/CardImageLarge.png'
import backgroundSmall from '../Assets/tmp/CardImage.png'

import { 
  SmallArticle,
  CardImageLarge,
  CardSix,
  Title,
  device,
} from '../components/base_components'

//CSS
import '../Assets/tmp/css/about.css'

import { dataAboutPage } from '../services/dummyData'
import { OnDesktop } from '../constants/Breakpoint'

const mapDispatchToProps = dispatch => ({
  dispatchHeadBackground: args => (
    dispatch(setHeadBackground(args))
  ),

  dispatchFooter: args => (
    dispatch(setFooter(args))
  )
})

class connectAbout extends Base {
  render(){
    this.props.dispatchHeadBackground({image: HeadBackground, text: "About Us"})
    this.props.dispatchFooter("primary")
    return(
      <div id="about">
        <OnDesktop>
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
            <div className="container" id="philosophy">
                <Title 
                    text="Our Philosophy"
                    image="http://timpietrusky.com/cdn/army.png"
                    margin="92px 0px 0px 0px"
                    
                />
            </div>
          </section>

          <section>
            <div className="container" id="imagephilosophy">
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
            <div className="container" align="right" id="sustainability">
              <Title 
                text="Sustainability"
                image="http://timpietrusky.com/cdn/army.png"
                margin="79px 0px 90px 0px"
              />
            </div>
          </section>

          <section>
            <div className="container" id="imagesustainability">
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
        </OnDesktop>
      </div>
    )
  }
}

const About = connect(null, mapDispatchToProps)(connectAbout)
export default About
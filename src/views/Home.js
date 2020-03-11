import React, { Component } from 'react'

// dummy image
import background from '../Assets/tmp/CardImage.png'

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
  CardText,
  CardTextSecondary,
  Title,
  CardImageRight,
} from '../components/base_components/base'
import CardImage from '../components/base_components/base/cardImageTopDown/CardImage'
import SliderCardImage from '../components/base_components/base/cardImageTopDown/SliderCardImage'

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <div id="home">
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

        {/* <CardImageRight
          title="RAJA AMPAT ISLAND"
          text="Hemmed by jungle and lulled by the lap of the Indian Ocean, the hotel is rich in island spirit"
          link="#linkTo"
          buttonName="View More"
          background={background}
        /> */}

        {/* <CardImage 
          caps="Jakarta"
          head="Senayan" 
          desc="Hemmed by jungle and lulled by the lap of the Indian Ocean, the hotel is rich in island spirit" 
        /> */}

        <div style={{display: "flex", justifyContent: "center"}}>
          <SliderCardImage
            // reversed
            store={[
              {
                id: 1,
                caps: "Jakarta",
                head: "Senayan",
                desc: "Hemmed by jungle and lulled by the lap of the Indian Ocean, the hotel is rich in island spirit",
                image: background
              },
              {
                id: 2,
                caps: "Bandung",
                head: "Dago",
                desc: "Hemmed by jungle and lulled by the lap of the Indian Ocean, the hotel is rich in island spirit",
                image: background
              },
              {
                id: 3,
                caps: "Bali",
                head: "Nusa Dua",
                desc: "Hemmed by jungle and lulled by the lap of the Indian Ocean, the hotel is rich in island spirit",
                image: background
              },
              {
                id: 4,
                caps: "Hongkong",
                head: "Bekasi",
                desc: "Hemmed by jungle and lulled by the lap of the Indian Ocean, the hotel is rich in island spirit",
                image: background
              }
            ]}
          />
        </div>

      </div>
    )
  }
}
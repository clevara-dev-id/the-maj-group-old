import React, { Component } from 'react'

// dummy image
import background from '../Assets/tmp/CardImage.png'
import backgroundLarge from '../Assets/tmp/CardImageLarge.png'

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
  CardImage,
  CardImageLarge,
} from '../components/base_components/base'

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

        <CardImage
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
        />

      </div>
    )
  }
}
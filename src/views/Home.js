import React, { Component } from 'react'

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
        <CardText
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
        />
      </div>
    )
  }
}
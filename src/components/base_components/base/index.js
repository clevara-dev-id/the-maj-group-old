import {device} from './DeviceWidth'
// Import Button
import { 
    ButtonPrimary, 
    ButtonPrimaryDisable,
    ButtonSecondary,
    ButtonSecondaryDisable,
    ButtonOutline,
    ButtonOutlineDisable,
    ButtonLink,
    ButtonSearch,
 } from './ButtonMaster';

 import { 
    ButtonPrimarySmall, 
    ButtonPrimarySmallDisable,
    ButtonSecondarySmall,
    ButtonSecondarySmallDisable,
    ButtonOutlineSmall,
    ButtonOutlineSmallDisable,
 } from './ButtonMasterSmall';

 import {
    CardText,
    CardTextSecondary,
 } from './CardText'

 import {
     Title
 } from './Title'

 import {
     CardImage,
     CardImageLarge, 
 } from './CardImage'

 import {
    PrimaryArticle,
    SecondaryArticle,
    SmallArticle,
 } from './ArticleComponent'

 import {
    NavigationBar
 } from './NavbarComponent'
 import { HeadComponent } from './HeadComponent'
//Import Carousel
import CarousellPrimary from "./CarousellMaster"
import CarousellSecondary from "./CarousellMasterSecondary"

import {Footer} from './footer/FooterComponent'

ButtonPrimary.defaultProps = {
    color : "#ffffff",
    fontFamily :"Verlag B",
    background :"#232323",
    fontSize : "17px",
    padding: "11px 28px",
    border: "0px",
}

ButtonPrimaryDisable.defaultProps = {
    color : "#C8C8C8",
    fontFamily :"Verlag B",
    background :"#EAE4E4",
    fontSize : "17px",
    padding: "4.8px 22px",
    border: "0px"
}

ButtonSecondary.defaultProps = {
    color : "#5A5A5A;",
    fontFamily :"Verlag B",
    background :"#C8C8C8",
    fontSize : "17px",
    padding: "4.8px 22px",
    border: "0px"
}

ButtonSecondaryDisable.defaultProps = {
    color : "#C8C8C8",
    fontFamily :"Verlag B",
    background :"#EAE4E4",
    fontSize : "17px",
    padding: "4.8px 22px",
    border: "0px"
}

ButtonOutline.defaultProps = {
    color : "#232323",
    fontFamily :"Verlag B",
    fontSize : "13px",
    padding: "11px 20px",
    border: "0px",
    border: "2px solid #232323"
}

ButtonOutlineDisable.defaultProps = {
    color : "#C8C8C8",
    fontFamily :"Verlag B",
    fontSize : "17px",
    padding: "4.8px 22px",
    border: "2px solid #C8C8C8"
}

ButtonPrimarySmall.defaultProps = {
    color : "#ffffff",
    fontFamily :"Verlag B",
    background :"#232323",
    fontSize : "12px",
    padding: "6.8px 22px",
    border: "0px"
}

ButtonPrimarySmallDisable.defaultProps = {
    color : "#C8C8C8",
    fontFamily :"Verlag B",
    background :"#EAE4E4",
    fontSize : "12px",
    padding: "4.8px 22px",
    border: "0px"
}

ButtonSecondarySmall.defaultProps = {
    color : "#5A5A5A;",
    fontFamily :"Verlag B",
    background :"#C8C8C8",
    fontSize : "12px",
    padding: "4.8px 22px",
    border: "0px"
}

ButtonSecondarySmallDisable.defaultProps = {
    color : "#C8C8C8",
    fontFamily :"Verlag B",
    background :"#EAE4E4",
    fontSize : "12px",
    padding: "4.8px 22px",
    border: "0px"
}

ButtonOutlineSmall.defaultProps = {
    color : "#232323",
    fontFamily :"Verlag B",
    fontSize : "12px",
    padding: "4.8px 22px",
    border: "0px",
    border: "2px solid #232323"
}

ButtonOutlineSmallDisable.defaultProps = {
    color : "#C8C8C8",
    fontFamily :"Verlag B",
    fontSize : "12px",
    padding: "4.8px 22px",
    border: "2px solid #C8C8C8"
}
  

export {
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
    ButtonLink,
    ButtonSearch,
    CardText,
    CardTextSecondary,
    Title,
    CardImage,
    CardImageLarge,
    PrimaryArticle,
    SecondaryArticle,
    SmallArticle,
    NavigationBar,
    CarousellPrimary,
    CarousellSecondary,
    Footer,
    HeadComponent,
    device,
};


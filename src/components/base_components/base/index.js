// Import Button
import { 
    ButtonPrimary, 
    ButtonPrimaryDisable,
    ButtonSecondary,
    ButtonSecondaryDisable,
    ButtonOutline,
    ButtonOutlineDisable
 } from './ButtonMaster';

 import { 
    ButtonPrimarySmall, 
    ButtonPrimarySmallDisable,
    ButtonSecondarySmall,
    ButtonSecondarySmallDisable,
    ButtonOutlineSmall,
    ButtonOutlineSmallDisable
 } from './ButtonMasterSmall';

//Import Carousel
import CarousellPrimary from "./CarousellMaster";
import CarousellSecondary from "./CarousellMasterSecondary";

//Import Sliderbar
import { SlidebarComponent } from './SlidebarComponent';

ButtonPrimary.defaultProps = {
    color : "#ffffff",
    fontFamily :"Verlag B",
    background :"#232323",
    fontSize : "17px",
    padding: "6.8px 22px",
    border: "0px"
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
    fontSize : "17px",
    padding: "4.8px 22px",
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
    CarousellPrimary,
    CarousellSecondary,
    SlidebarComponent
};


import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
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
  ButtonOutlineSmallDisable
} from './components/base_components/base/';
import {
  CarousellPrimary,
  CarousellSecondary
} from './components/base_components/base/';

import Sliderbar from './components/base_components/base/SlidebarComponent';
import Home from './views/Home'


// let parseData=JSON.parse(data);
// console.log(parseData);

// let data=[];

// data[0]={
//     source      :`/assets/images/Rectangle45.png`,
//     name        : 'Hotel',
//     description : 'Esse tempor qui enim ut aute cupidatat in dolor magna irure voluptate consequat Lorem. Occaecat ad adipisicing enim Lorem minim ea elit exercitation dolor et ad consequat aliqua.',
//     link        : '/homepage'
// }
// data[1]={
//     source      :`/assets/images/Rectangle45.png`,
//     name        : 'Hotel',
//     description : 'Esse tempor qui enim ut aute cupidatat in dolor magna irure voluptate consequat Lorem. Occaecat ad adipisicing enim Lorem minim ea elit exercitation dolor et ad consequat aliqua.',
//     link        : '/profile'
// }
// data[2]={
//     source      :`/assets/images/Rectangle45.png`,
//     name        : 'Hotel',
//     description : 'Esse tempor qui enim ut aute cupidatat in dolor magna irure voluptate consequat Lorem. Occaecat ad adipisicing enim Lorem minim ea elit exercitation dolor et ad consequat aliqua.',
//     link        : '/about'
// }
// data[3]={
//     source      :`/assets/images/Rectangle45.png`,
//     name        : 'Hotel',
//     description : 'Esse tempor qui enim ut aute cupidatat in dolor magna irure voluptate consequat Lorem. Occaecat ad adipisicing enim Lorem minim ea elit exercitation dolor et ad consequat aliqua.',
//     link        : '/contact'
// }

function App() {
  return (
    <>
      <Home />
      {/* <CarousellSecondary store={data} orientation="top" /> */}

      {/* <Sliderbar /> */}
    </>
    // <>
    //   <Container>
    //     <Row>
    //       <Col><h1>This is My Titile using (Heading 1)</h1></Col>
    //     </Row>
    //     <Row>
    //       <Col><h2>This is My Titile using (Heading 2)</h2></Col>
    //     </Row>
    //     <Row>
    //       <Col><h3>This is My Titile using (Heading 3)</h3></Col>
    //     </Row>s
    //     <Row>
    //       <Col><h4>This is My Titile using (Heading 4)</h4></Col>
    //     </Row>
    //     <Row>
    //       <Col><h5>This is My Caption using (Heading 5)</h5></Col>
    //       <Col><h6>This is My Caption using (Heading 6)</h6></Col>
    //     </Row>
    //     <Row>
    //       <Col><p>this is page font of body</p></Col>
    //     </Row>
    //   </Container>
    // </>

    // <>
    //     <br />
    //     <ButtonPrimary buttonName="Default" handleButton={()=>{console.log("Button Enable")}} />
    //     <pre>....</pre>
    //     <ButtonPrimaryDisable buttonName="Disbale" />
    //     <br /><br /><br />
    //     <ButtonSecondary link="http://google.com" buttonName="Default" />
    //     <pre>...</pre>
    //     <ButtonSecondaryDisable buttonName="Disable" />
    //     <br /><br /><br />
    //     <ButtonOutline link="http://google.com" buttonName="Default" />
    //     <pre>...</pre>
    //     <ButtonOutlineDisable buttonName="Enable" />
    //     <br /><br /><br />
    //     <ButtonPrimarySmall buttonName="Default" handleButton={()=>{console.log("Button Enable")}} />
    //     <pre>....</pre>
    //     <ButtonPrimarySmallDisable buttonName="Disable" />
    //     <br /><br /><br />
    //     <ButtonSecondarySmall link="http://google.com" buttonName="Default" />
    //     <pre>...</pre>
    //     <ButtonSecondarySmallDisable buttonName="Disable" />
    //     <br /><br /><br />
    //     <ButtonOutlineSmall link="http://google.com" buttonName="Default" />
    //     <pre>...</pre>
    //     <ButtonOutlineSmallDisable buttonName="Enable" />
    // </>
  );
}

export default App;

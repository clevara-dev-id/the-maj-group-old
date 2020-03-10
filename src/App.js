import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import CustomArrows from './components/base_components/base/CarousellMaster'
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

function App() {
  return (
    <>
    <div>
        <CustomArrows />
    </div>
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

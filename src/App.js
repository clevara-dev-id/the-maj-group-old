import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { 
  ButtonLargeFristEnable, 
  ButtonLargeFristDisable,
  ButtonLargeSecondEnable,
  ButtonLargeSecondDisable,
  ButtonLargeThirdEnable,
  ButtonLargeThirdDisable,
  ButtonSmallFristEnable, 
  ButtonSmallFristDisable,
  ButtonSmallSecondEnable,
  ButtonSmallSecondDisable,
  ButtonSmallThirdEnable,
  ButtonSmallThirdDisable
} from './components/base_components/base/';

function App() {
  return (
    <>
        <br />
        <ButtonLargeFristEnable buttonName="Default" handleButton={()=>{console.log("Button Enable")}} />
        <pre>....</pre>
        <ButtonLargeFristDisable buttonName="Disable" />
        <br /><br /><br />
        <ButtonLargeSecondEnable buttonName="Default" />
        <pre>...</pre>
        <ButtonLargeSecondDisable buttonName="Disable" />
        <br /><br /><br />
        <ButtonLargeThirdEnable buttonName="Default" />
        <pre>...</pre>
        <ButtonLargeThirdDisable buttonName="Enable" />
        <br /><br /><br />
        <ButtonSmallFristEnable buttonName="Default" handleButton={()=>{console.log("Button Enable")}} />
        <pre>....</pre>
        <ButtonSmallFristDisable buttonName="Disable" />
        <br /><br /><br />
        <ButtonSmallSecondEnable buttonName="Default" />
        <pre>...</pre>
        <ButtonSmallSecondDisable buttonName="Disable" />
        <br /><br /><br />
        <ButtonSmallThirdEnable buttonName="Default" />
        <pre>...</pre>
        <ButtonSmallThirdDisable buttonName="Enable" />
    </>
  );
}

export default App;

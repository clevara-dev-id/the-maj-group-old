import React, { Component } from 'react';
import styled from 'styled-components';
 
export class ButtonSmallFristEnable extends Component {
    constructor(props){
        super(props);
        this.state={
            buttonName : "DEFAULT",
            onChange: null,
            color : "#ffffff",
            fontFamily :"Verlag B",
            background :"#232323",
            fontSize : "22px",
            padding: "4.8px 22px",
            border: "0px"
        }
        // this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount()
    {
        this.handleChange();
    }
    handleChange=()=>{
        this.setState({
            buttonName:this.props.buttonName,
            color : this.props.color,
            fontFamily :this.props.fontFamily,
            background :this.props.background,
            fontSize : this.props.fontSize,
            padding: this.props.padding,
            border: this.props.border
        });
    }
    render() {
        const Button = styled.button`
            color: ${this.state.color};
            font-size : ${this.state.fontSize};
            margin: 1em;
            padding: ${this.state.padding};
            border: ${this.state.border};
            border-radius: 0px;
            display: block;

            font-family: ${this.state.fontFamily};
            font-style: ${this.state.fontStyle};
            line-height: 22px;

            position: absolute;
            background: ${this.state.background};
            text-align: center;
            text-transform: uppercase;
        `;
        
        return (
            <div>
                <Button as="a" onClick={this.props.handleButton}>{this.state.buttonName}</Button>
            </div>
        )
    }
}

export class ButtonSmallFristDisable extends Component {
    constructor(props){
        super(props);
        this.state={
            buttonName : "DEFAULT",
            onChange: null,
            color : "#ffffff",
            fontFamily :"Verlag B",
            background :"#232323",
            fontSize : "22px",
            padding: "4.8px 22px",
            border: "0px"
        }
        // this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount()
    {
        this.handleChange();
    }
    handleChange=()=>{
        this.setState({
            buttonName:this.props.buttonName,
            color : this.props.color,
            fontFamily :this.props.fontFamily,
            background :this.props.background,
            fontSize : this.props.fontSize,
            padding: this.props.padding,
            border: this.props.border
        });
    }
    render() {
        const Button = styled.button`
            color: ${this.state.color};
            font-size : ${this.state.fontSize};
            margin: 1em;
            padding: ${this.state.padding};
            border: ${this.state.border};
            border-radius: 0px;
            display: block;

            font-family: ${this.state.fontFamily};
            font-style: ${this.state.fontStyle};
            line-height: 22px;

            position: absolute;
            background: ${this.state.background};
            text-align: center;
            text-transform: uppercase;
        `;
        
        return (
            <div>
                <Button as="a" onClick={this.props.handleButton}>{this.state.buttonName}</Button>
            </div>
        )
    }
}

export class ButtonSmallSecondEnable extends Component {
    constructor(props){
        super(props);
        this.state={
            buttonName : "DEFAULT",
            onChange: null,
            color : "#ffffff",
            fontFamily :"Verlag B",
            background :"#232323",
            fontSize : "22px",
            padding: "4.8px 22px",
            border: "0px"
        }
        // this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount()
    {
        this.handleChange();
    }
    handleChange=()=>{
        this.setState({
            buttonName:this.props.buttonName,
            color : this.props.color,
            fontFamily :this.props.fontFamily,
            background :this.props.background,
            fontSize : this.props.fontSize,
            padding: this.props.padding,
            border: this.props.border
        });
    }
    render() {
        const Button = styled.button`
            color: ${this.state.color};
            font-size : ${this.state.fontSize};
            margin: 1em;
            padding: ${this.state.padding};
            border: ${this.state.border};
            border-radius: 0px;
            display: block;

            font-family: ${this.state.fontFamily};
            font-style: ${this.state.fontStyle};
            line-height: 22px;

            position: absolute;
            background: ${this.state.background};
            text-align: center;
            text-transform: uppercase;
        `;
        
        return (
            <div>
                <Button as="a" onClick={this.props.handleButton}>{this.state.buttonName}</Button>
            </div>
        )
    }
}

export class ButtonSmallSecondDisable extends Component {
    constructor(props){
        super(props);
        this.state={
            buttonName : "DEFAULT",
            onChange: null,
            color : "#ffffff",
            fontFamily :"Verlag B",
            background :"#232323",
            fontSize : "22px",
            padding: "4.8px 22px",
            border: "0px"
        }
        // this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount()
    {
        this.handleChange();
    }
    handleChange=()=>{
        this.setState({
            buttonName:this.props.buttonName,
            color : this.props.color,
            fontFamily :this.props.fontFamily,
            background :this.props.background,
            fontSize : this.props.fontSize,
            padding: this.props.padding,
            border: this.props.border
        });
    }
    render() {
        const Button = styled.button`
            color: ${this.state.color};
            font-size : ${this.state.fontSize};
            margin: 1em;
            padding: ${this.state.padding};
            border: ${this.state.border};
            border-radius: 0px;
            display: block;

            font-family: ${this.state.fontFamily};
            font-style: ${this.state.fontStyle};
            line-height: 22px;

            position: absolute;
            background: ${this.state.background};
            text-align: center;
            text-transform: uppercase;
        `;
        
        return (
            <div>
                <Button as="a" onClick={this.props.handleButton}>{this.state.buttonName}</Button>
            </div>
        )
    }
}

export class ButtonSmallThirdEnable extends Component {
    constructor(props){
        super(props);
        this.state={
            buttonName : "DEFAULT",
            onChange: null,
            color : "#ffffff",
            fontFamily :"Verlag B",
            background :"#232323",
            fontSize : "22px",
            padding: "4.8px 22px",
            border: "0px"
        }
        // this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount()
    {
        this.handleChange();
    }
    handleChange=()=>{
        this.setState({
            buttonName:this.props.buttonName,
            color : this.props.color,
            fontFamily :this.props.fontFamily,
            background :this.props.background,
            fontSize : this.props.fontSize,
            padding: this.props.padding,
            border: this.props.border
        });
    }
    render() {
        const Button = styled.button`
            color: ${this.state.color};
            font-size : ${this.state.fontSize};
            margin: 1em;
            padding: ${this.state.padding};
            border: ${this.state.border};
            border-radius: 0px;
            display: block;

            font-family: ${this.state.fontFamily};
            font-style: ${this.state.fontStyle};
            line-height: 22px;

            position: absolute;
            background: ${this.state.background};
            text-align: center;
            text-transform: uppercase;
        `;
        
        return (
            <div>
                <Button as="a" onClick={this.props.handleButton}>{this.state.buttonName}</Button>
            </div>
        )
    }
}

export class ButtonSmallThirdDisable extends Component {
    constructor(props){
        super(props);
        this.state={
            buttonName : "DEFAULT",
            onChange: null,
            color : "#ffffff",
            fontFamily :"Verlag B",
            background :"#232323",
            fontSize : "22px",
            padding: "4.8px 22px",
            border: "0px"
        }
        // this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount()
    {
        this.handleChange();
    }
    handleChange=()=>{
        this.setState({
            buttonName:this.props.buttonName,
            color : this.props.color,
            fontFamily :this.props.fontFamily,
            background :this.props.background,
            fontSize : this.props.fontSize,
            padding: this.props.padding,
            border: this.props.border
        });
    }
    render() {
        const Button = styled.button`
            color: ${this.state.color};
            font-size : ${this.state.fontSize};
            margin: 1em;
            padding: ${this.state.padding};
            border: ${this.state.border};
            border-radius: 0px;
            display: block;

            font-family: ${this.state.fontFamily};
            font-style: ${this.state.fontStyle};
            line-height: 22px;

            position: absolute;
            background: ${this.state.background};
            text-align: center;
            text-transform: uppercase;
        `;
        
        return (
            <div>
                <Button as="a" onClick={this.props.handleButton}>{this.state.buttonName}</Button>
            </div>
        )
    }
}
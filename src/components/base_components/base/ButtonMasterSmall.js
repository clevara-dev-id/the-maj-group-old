import React, { Component } from 'react';
import styled from 'styled-components';
 
export class ButtonPrimarySmall extends Component {
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
            transition: .05s all;
            text-decoration:none;
            &:hover {
                background-color: #fff;
                color: #232323;
                border: 2px solid #232323;
                cursor: pointer;
                text-decoration:none;
            }
        `;
        
        return (
            <div>
                <Button as="a" href={this.props.link||"#"} onClick={this.props.handleButton}>{this.state.buttonName}</Button>
            </div>
        )
    }
}

export class ButtonPrimarySmallDisable extends Component {
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
            &:hover {
                cursor: pointer;
            }
        `;
        
        return (
            <div>
                <Button as="a" onClick={this.props.handleButton}>{this.state.buttonName}</Button>
            </div>
        )
    }
}

export class ButtonSecondarySmall extends Component {
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
            transition: .05s all;
            text-decoration:none;
            &:hover {
                background-color: #fff;
                color: #5A5A5A;
                border: 2px solid #C8C8C8;
                cursor: pointer;
                text-decoration:none;
            }
        `;
        
        return (
            <div>
                <Button as="a" href={this.props.link||"#"} onClick={this.props.handleButton}>{this.state.buttonName}</Button>
            </div>
        )
    }
}

export class ButtonSecondarySmallDisable extends Component {
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
            &:hover {
                cursor: pointer;
            }
        `;
        
        return (
            <div>
                <Button as="a" onClick={this.props.handleButton}>{this.state.buttonName}</Button>
            </div>
        )
    }
}

export class ButtonOutlineSmall extends Component {
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
            transition: .05s all;
            text-decoration:none;
            &:hover {
                background-color: #232323;
                color: #fff;
                border: 2px solid #232323;
                cursor: pointer;
                text-decoration:none;
            }
        `;
        
        return (
            <div>
                <Button as="a" href={this.props.link||"#"} onClick={this.props.handleButton}>{this.state.buttonName}</Button>
            </div>
        )
    }
}

export class ButtonOutlineSmallDisable extends Component {
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
            &:hover {
                cursor: pointer;
            }
        `;
        
        return (
            <div>
                <Button as="a" onClick={this.props.handleButton}>{this.state.buttonName}</Button>
            </div>
        )
    }
}
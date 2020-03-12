import React, { Component } from 'react';
import styled from 'styled-components';
 
export class ButtonPrimary extends Component {
    constructor(props){
        super(props);
        this.state={
            buttonName : "DEFAULT",
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
            text-decoration: none;
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

export class ButtonPrimaryDisable extends Component {
    constructor(props){
        super(props);
        this.state={
            buttonName : "DEFAULT",
            onChange: null,
            color : "#C8C8C8",
            fontFamily :"Verlag B",
            background :"#EAE4E4",
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
            text-decoration:none;

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

export class ButtonSecondary extends Component {
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
            border: this.props.border,
            link: this.props.link
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

export class ButtonSecondaryDisable extends Component {
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

export class ButtonOutline extends Component {
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

export class ButtonOutlineDisable extends Component {
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

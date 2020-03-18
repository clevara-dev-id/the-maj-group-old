import React, { Component, createRef } from 'react'

export default class Base extends Component {
    constructor(props){
    super(props)
    this.state = {
        footer: {
            validated: true,
            data: {}
        }
    }

    this.footreftitle = createRef()
    this.footrefname = createRef()
    this.footrefemail = createRef()
    
    this._footer = this._footer.bind(this)
}
    
    _footer = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            this.setState({footer:{validated:false}});
            e.preventDefault();
            e.stopPropagation();
        }

        const data = {
            title: this.footreftitle.current.value,
            name: this.footrefname.current.value,
            email: this.footrefemail.current.value
        }
        alert(JSON.stringify(data))
        this.setState({
            footer: {
                data: data
            }
        })
        e.preventDefault()
    }
}

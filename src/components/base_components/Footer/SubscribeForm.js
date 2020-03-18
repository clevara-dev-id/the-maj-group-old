import React, { Component } from 'react'
import { Form, Col } from 'react-bootstrap'

export class SubscribeForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            title: "",
            name: "",
            email: "",
        }
    }
    
    render() {
        return (
            // add this ti validate
            // validated={this.props.validated}
            <Form onSubmit={this.props.onSubmit} method="post">
                <Form.Row>
                    <Form.Group as={Col} lg={4} sm={4} xs={4}>
                        <Form.Control 
                            as='select'
                            ref={this.props.titleRef}
                            value={this.state.title}
                            onChange={e => this.setState({title: e.target.value})}
                            required={true}
                            // isInvalid={this.state.title === null? false: this.state.title.length? false: true}
                        >
                            <option disabled={this.state.title? 'disabled': null}>Title</option>
                            {this.props.storeTitle && this.props.storeTitle.map((d, i) => (
                                <option key={i+1} value={d.name}>{d.name}</option>
                            ))}
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                            Please choose a Title
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col}  lg={8} sm={8} xs={8}>
                        <Form.Control 
                            type="text"
                            placeholder='Fullname' 
                            ref={this.props.nameRef}
                            value={this.state.name}
                            onChange={(e) => this.setState({name: e.target.value})}
                            required={true}
                            // isInvalid={this.state.name === null? false: this.state.name.length? false: true}
                        />
                        <Form.Control.Feedback type="invalid">
                                Please insert a Name
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Control 
                            type="email"
                            placeholder='Email address'
                            ref={this.props.emailRef}
                            value={this.state.email}
                            onChange={(e) => this.setState({email: e.target.value})}
                            required={true}
                            // isInvalid={this.state.email === null? false: this.state.email.length? false: true}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please insert a valid Email Address
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                
                {this.props.children}
            </Form>
        )
    }
}

export default SubscribeForm

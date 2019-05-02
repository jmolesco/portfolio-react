import React, { Component } from 'react';
import { Container, Row, Col, Form, Button, Image, FormControl, InputGroup } from 'react-bootstrap';
import axios from 'axios';
import * as commandType from '../../actions/CommandType';
class Tester extends Component {
    constructor() 
    {
        super();
        this.state = {
            urlName:"User/SendMessage",
            Name:"",
            EmailAddress:"",
            Message:"",
            InputValidationName:commandType.SUCCESS,
            InputValidationEmailAddress:commandType.SUCCESS,
            InputValidationMessage:commandType.SUCCESS,
            validate:false,
            ErrorMsg_Name:"",
            ErrorMsg_EmailAddress:"",
            ErrorMsg_Message:"",
            Keyword:"ErrorMsg_",
            Keyword2:"InputValidation"
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange =(event)=>{
        this.setState({
            [event.target.id]:event.target.value
        });
    }
    handleSubmit(event) {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        let parameter = {
            Name:this.state.Name,
            EmailAddress:this.state.EmailAddress,
            Message:this.state.Message
        };
        console.log(this.state.validate);
        if(this.state.validate===true){
            console.log('in here');
            this.setState({
                validate:false
            });
        }
        axios({
            url:'https://localhost:44366/api/User/SendMessage',
            method:'POST',
            data:parameter,
            headers:{
                'Content-Type':'application/json;charset=utf-8'
            }
        }).then(res=>{
            console.log(res);
        }).catch(error=>
        {
            this.setState({validate:true})
            console.log(error.response.data);
            var errors =error.response.data.Errors
            Object.keys(errors).map((key)=>
            {
                var keyname = this.state.Keyword + key;
                var errname = this.state.Keyword2 + key;
                this.setState({
                    [keyname]:errors[key],
                    [errname]:commandType.ERROR,
                });
            });
            console.log(this.state);
        });
    }

    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">               
                 <Form
                    noValidate
                    //validated={this.state.validate}
                    onSubmit={e => this.handleSubmit(e)}
                >
                    <Form.Row>
                        <Form.Group as={Col} md="4" controlId="Name" >
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={this.handleInputChange}
                                className="has-error"

                                    />
                                 <div className={this.state.InputValidationName}>
                                    {this.state.ErrorMsg_Name}
                                 </div>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="EmailAddress" >
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                placeholder="Last name"
                                onChange={this.handleInputChange}
                                />
                              <Form.Control.Feedback type={this.state.InputValidationEmailAddress}>
                                {this.state.ErrorMsg_EmailAddress}  
                              </Form.Control.Feedback>

                        </Form.Group>
                        <Form.Group controlId="Message" >
                                <Form.Label>Message</Form.Label>
                                <Form.Control 
                                    required
                                    as="textarea" 
                                    rows="3" 
                                    placeholder="Enter your message" 
                                    onChange={this.handleInputChange}
                                    />
                                    <Form.Control.Feedback type={this.state.InputValidationMessage}>
                                        {this.state.ErrorMsg_Message}  
                                    </Form.Control.Feedback>
                            </Form.Group>
                    </Form.Row>
                    <Button type="submit">Submit form</Button>
                </Form>
                </Row>

            </Container>
        );
    }
}
export default Tester;
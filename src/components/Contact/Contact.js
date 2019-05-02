import React, { Component } from 'react';
import { Container, Row, Col, Form, Button, Image, FormControl, Alert, FormGroup } from 'react-bootstrap';
import '../Contact/Contact.css';
import fast from '../../images/running.png';
import responsive from '../../images/responsive.png';
import zoom from '../../images/zoom.png';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { contactUsInsertFulFilled } from '../../actions/ContactUsAction';
import * as commandType from '../../actions/CommandType';

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            urlName: "User/SendMessage",
            Name: "",
            EmailAddress: "",
            Message: "",
            InputValidationName: commandType.SUCCESS,
            InputValidationEmailAddress: commandType.SUCCESS,
            InputValidationMessage: commandType.SUCCESS,
            InputHasErrorName: "",
            InputHasErrorEmailAddress: "",
            InputHasErrorMessage: "",
            validate: false,
            ErrorMsg_Name: "",
            ErrorMsg_EmailAddress: "",
            ErrorMsg_Message: "",
            Keyword: "ErrorMsg_",
            Keyword2: "InputValidation",
            Keyword3: "InputHasError",
            isHidden: false
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.setError = this.setError.bind(this);
        this.unSetError = this.unSetError.bind(this);
    }
    handleInputChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    handleClickSendMessage = (event) => {
         event.preventDefault();
  
        let param = {
            Name: this.state.Name,
            EmailAddress: this.state.EmailAddress,
            Message: this.state.Message
        }
        let data = {
            urlName: this.state.urlName,
            methodType: commandType.POST,
            data: param,
            header: null
        }

        this.props.callContactUsInsert(data);
    }
    componentWillReceiveProps(nextprops) {
        var getState = nextprops.contactUs
        if (getState.actionEvent === commandType.INSERT) {
            let fieldName = {
                Name: "",
                EmailAddress: "",
                Message: ""
            };
            if (getState.failed === true) 
            {        
                this.setState({ isHidden: false });
                var errorList = getState.error;
               
                if (errorList != null) {
                    var errors = errorList.Errors;
                    //console.log(errors);
                    //console.log(Object.keys(fieldName).length + " === " + Object.keys(errors).length);
                    if (Object.keys(fieldName).length !== Object.keys(errors).length) {
                        console.log('entered');
                        this.unSetError(fieldName, errors);
                    }
                    this.setError(errors);
                }
            }
            else {
                var error = {};
                this.unSetError(fieldName, error);
                this.setState({ isHidden: true })

            }
        }
    }

    setError = (errors) => {
        Object.keys(errors).map((key) => {
            var keyname = this.state.Keyword + key;
            var errname = this.state.Keyword2 + key;
            var errname1 = this.state.Keyword3 + key;
            this.setState({
                [keyname]: errors[key],
                [errname]: commandType.ERROR,
                [errname1]: commandType.HASERROR
            });
        });
    }
    unSetError = (fieldName, errors) => {
        let getKeys = [];
        Object.keys(errors).map((keys) => {
            getKeys.push(keys);
        })
        Object.keys(fieldName).map((keys) => {
            if (getKeys.indexOf(keys) === -1) {
                var keyname = this.state.Keyword + keys;
                var errname = this.state.Keyword2 + keys;
                var errname1 = this.state.Keyword3 + keys;
                this.setState({
                    [keyname]: "",
                    [errname]: commandType.SUCCESS,
                    [errname1]: ""
                });
            }
        });
    }
    closeMsg=()=>{
        this.setState({ isHidden: false,Name:"" });
        console.log('click');
    }
    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col sm={3}>
                        <h1>
                            <Image src={fast} rounded />
                        </h1>
                        <h3>Fast</h3>
                        <hr></hr>
                        <p>
                            Fast load times and lag free interaction, my highest priority.
                 </p>
                    </Col>

                    <Col sm={3}>
                        <h1>
                            <Image src={responsive} rounded />
                        </h1>
                        <h3>Responsive</h3>
                        <hr></hr>
                        <p>
                            My layouts will work on any device, big or small.
                </p>
                    </Col>

                    <Col sm={3}>
                        <h1>
                            <Image src={zoom} rounded />
                        </h1>
                        <h3>Dynamic</h3>
                        <hr></hr>
                        <p>
                            My works is data interactive.
                </p>
                    </Col>

                </Row>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <h3><center>Have a question? Please enquire below</center>
                        </h3>
                        <hr></hr>
                        <Alert variant="success" show={this.state.isHidden} dismissible onClose={this.closeMsg.bind(this)} >
                                    <Alert.Heading>Hey, nice to meet you!</Alert.Heading>
                                    <p>
                                        The email was sent. Check your inbox, I have also sent you the acknowledgement receipt of your email. Thank you!
                            </p>
                                </Alert>
                        <Form
                        >
                            <Form.Group controlId="Name" >
                                <Form.Label className={this.state.InputValidationName}>Name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Enter your name"
                                    onChange={this.handleInputChange}
                                    className={this.state.InputHasErrorName}
                                    defaultValue={this.state.Name}
                                />
                                <div className={this.state.InputValidationName}>
                                    {this.state.ErrorMsg_Name}
                                </div>
                            </Form.Group>
                            <Form.Group controlId="EmailAddress" >
                                <Form.Label className={this.state.InputValidationEmailAddress}>Email Address</Form.Label>
                                <Form.Control
                                    required
                                    type="email"
                                    placeholder="Enter your email address"
                                    onChange={this.handleInputChange}
                                    className={this.state.InputHasErrorEmailAddress}
                                />
                                <div className={this.state.InputValidationEmailAddress}>
                                    {this.state.ErrorMsg_EmailAddress}
                                </div>
                            </Form.Group>
                            <Form.Group controlId="Message" >
                                <Form.Label className={this.state.InputValidationMessage}>Message</Form.Label>
                                <Form.Control
                                    required
                                    as="textarea"
                                    rows="3"
                                    placeholder="Enter your message"
                                    onChange={this.handleInputChange}
                                    className={this.state.InputHasErrorMessage}
                                />
                                <div className={this.state.InputValidationMessage}>
                                    {this.state.ErrorMsg_Message}
                                </div>
                            </Form.Group>
                            <Button variant="primary" type="button"
                                onClick={this.handleClickSendMessage.bind(this)}
                            >
                                Send Message
                    </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}
const mapStateToProps = (state) => {
    let data = {
        contactUs: state.contactusInsertReturnSet
    }
    return data;
}
const mapActionToProps = (dispatch) => {
    return bindActionCreators({
        callContactUsInsert: contactUsInsertFulFilled,
    }, dispatch);
};
export default connect(mapStateToProps, mapActionToProps)(Contact);
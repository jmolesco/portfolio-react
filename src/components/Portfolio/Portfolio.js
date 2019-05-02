import React, { Component } from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import logbox from '../../images/projects/logbox.jpeg';
class Portfolio extends Component{
    render(){
        return(
            <Container>
                <Row className="justify-content-md-center">
                     <Col sm={3}>
                        <h3>
                            <center>
                                 <Image src={logbox} thumbnail className="profile"/>
                            </center>
                        </h3>
                        <h5><center>Logbox:Attendance Monitoring </center></h5>
                        <hr></hr>
                        <h6>Start Date :&nbsp;September 2013</h6>
                        <h6>End Date&nbsp;&nbsp;&nbsp;:&nbsp;September 2013</h6>   
                        <hr></hr>
                        <h6>
                            <center>
                                 <a href="#">
                                    &raquo; Check more information
                                 </a>
                            </center>
                        </h6>

                    </Col>
                    <Col sm={3}>
                        <h5><center> OOpen </center></h5>                      
                    </Col>
                    <Col sm={3}>
                        <h5><center>Dealer Module </center></h5>                      
                    </Col>
                </Row> 
                </Container>        
        );
    }
}
export default Portfolio;
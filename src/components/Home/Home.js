import React, { Component } from 'react';
import { Row, Col,Button } from 'react-bootstrap';
import '../Home/Home.css';
import {Link} from 'react-router-dom';
class Home extends Component {
    render() {

        return (
            <div className="bgd-container">
                <Row className="show-grid " >
                    <Col className="col-lg-12 col-xs-12 clearUserfix">
                        <p className="front-text">
                            <span>
                                Hi, I'm JM. I design & build website application
                           </span>
                        </p>
                        <p className="front-text-1">
                                <Button variant="outline-light" style={{ width: '50%',padding:'.85%' }} type="button"
                                                    
                                                >
                                                    <Link  to="/about" style={{color:'white'}}>&nbsp;Find out more</Link>
                                        </Button>
                            {/* <span className="findoutmore">
                                &raquo; <Link  to="/about">&nbsp;Find out more</Link>
                            </span> */}
                        </p>
                    </Col>
                </Row>
            </div>
        )
    }

}

export default Home;
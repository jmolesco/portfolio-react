import React, { Component } from 'react';
import { Container, Row, Col, Badge, Button, Image,OverlayTrigger,Tooltip,ButtonToolbar,Card,CardDeck } from 'react-bootstrap';
import '../About/About.css';
import designer from '../../images/designer.png';
import frontend from '../../images/frontend.png';
import othertools from '../../images/othertools.png';
import profile from '../../images/profile.png';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { aboutGetFulFilled } from '../../actions/AboutAction';
import * as commandType from '../../actions/CommandType';

class About extends Component {
    constructor(){
        super();
        this.state ={
            list:[],
            urlName:"User/GetAllSkills?",
            CurrentPage:1,
            OrderBy:3,
            FilterBy:3,
            ShowAll:true,
            OrderTypeCriteria:2
        }
    }
    componentDidMount()
    {
        //this.OnLoad();          
    }
    OnLoad=async()=>{
        let url = this.state.urlName + "CurrentPage=" +
                        this.state.CurrentPage + "&OrderBy=" +
                            this.state.OrderBy +   "&ShowAll="+
                                    this.state.ShowAll + "&OrderTypeCriteria="+
                                        this.state.OrderTypeCriteria +"&FilterBy=" 

        await this.loadSkills(url + 3);
        await this.loadSkills(url + 4);
        await this.loadSkills(url + 5);
    }
    loadSkills = async (url) =>{
        let data ={
            urlName: url,
            methodType: commandType.GET,
            data: null,
            header: null
        }
        await this.props.aboutFetchFulfilled(data);
        // // return new Promise(resolve=>{
        // //     setTimeout(()=>{
        //         await this.props.aboutFetchFulfilled(data);
        // //         resolve(true);
        // //     },1000);
        // // });
        
    }
    componentWillReceiveProps(nextprops){
        var getState = nextprops.list;
        //console.log(getState);
        if(getState.actionEvent === commandType.FETCH)
        {
            if (getState.fetched ===false) {

            }
            else if(getState.fetched===true){

                var result = [];
                
                result = this.state.list;
                result.push(getState.list);
                this.setState({list:result});
                // console.log(this.state.list);
                //console.log(getState.list);
            }
        }
    }
    render() {
        return (
            <Container>
                <Row className="justify-content-md-left">
                    <Col md={4}>
                        {/* /md={{ span: 6, offset: 3 }}> */}
                            <Card className="text-left">
                                <center>
                                <Card.Img variant="top"  src={profile} />
                                </center>
                                <Card.Footer className="text-center">
                                    <small className="text-muted text-center">Hi, I'm JM, a Senior Software Engineer from the Philippines. Take a look more!</small>
                                </Card.Footer>
                             </Card>                       
                    </Col>
                    <Col sm={8}>
                        <Card className="text-center">
                                <Card.Header>About What I Do</Card.Header>
                                    <Card.Body>
                                        <Card.Text>
                                            <p className="text-justify">
                                                I am passionate about building and developing software application focusing mainly on website application. This enables me to help and achieve the business goals of my client from individuals, small-businesses to large enterprise corporation. It helps me to empower their business by providing them an excellent software that improves their business and services provided.
                                                With that, I can say that with my years of experience, I am capable of achieving what my client/s wants and goals.
                                            </p> 
                                        </Card.Text>
                                        <br />
                                    </Card.Body>
                            </Card>                       
                    </Col>
                </Row>
               
                <Row>
                    <Col sm={12}>
                        <CardDeck>
                            <Card>
                                    <center>
                                        <Card.Img variant="top" className="card-img-manual" src={designer} />
                                    </center>
                                    <Card.Body>
                                        <Card.Title className="text-center">
                                            Front End
                                        </Card.Title>
                                        <hr />
                                        <p className="text-justify">
                                                My skills involved in developing a website from scratch.
                                                Below are the list of front end tools I am using and the years of experience I handled it
                                        </p>
                                        <div className="skillset">
                                            {
                                                this.state.list[0] &&
                                                this.state.list[0].map((item,i)=>{
                                                    return (
                                                        <ButtonToolbar key={i}>                               
                                                        <OverlayTrigger
                                                            overlay={
                                                            <Tooltip id={i}>
                                                                &nbsp;&nbsp;{item.Code}&nbsp;&nbsp;
                                                            </Tooltip>
                                                            }
                                                        >                                           
                                                            <Button variant="primary" id={"btn"+i} >
                                                                {item.SkillTitle} <Badge variant="light">{item.YearsOfExperience}</Badge>
                                                                <span className="sr-only">unread messages</span>
                                                            </Button>
                                                        </OverlayTrigger>
                                                    
                                                    </ButtonToolbar>
                                                    )

                                                })
                                            }
                                        </div>

                                    </Card.Body>
                                    
                                </Card>
                                <Card>
                                    <center>
                                        <Card.Img variant="top" className="card-img-manual" src={frontend} />
                                    </center>
                                    <Card.Body>
                                        <Card.Title className="text-center">
                                            Back End
                                        </Card.Title>
                                        <hr />
                                        <p className="text-justify">
                                            Developing website application includes also back end tools. Below are the tools and programming languages I am using
                                        </p>
                                        <div className="skillset">
                                            {
                                                this.state.list[1] &&
                                                this.state.list[1].map((item,i)=>{
                                                    return (
                                                        <ButtonToolbar key={i}>                               
                                                        <OverlayTrigger
                                                            overlay={
                                                            <Tooltip id={i}>
                                                                &nbsp;&nbsp;{item.Code}&nbsp;&nbsp;
                                                            </Tooltip>
                                                            }
                                                        >                                           
                                                            <Button variant="primary" id={"btn"+i} >
                                                                {item.SkillTitle} <Badge variant="light">{item.YearsOfExperience}</Badge>
                                                                <span className="sr-only">unread messages</span>
                                                            </Button>
                                                        </OverlayTrigger>
                                                    
                                                    </ButtonToolbar>
                                                    )

                                                })
                                            }
                                        </div>

                                    </Card.Body>
                                    
                                </Card>
                                
                                <Card>
                                    <center>
                                        <Card.Img variant="top" className="card-img-manual" src={othertools}  />
                                    </center>
                                    <Card.Body>
                                        <Card.Title className="text-center"> 
                                            Other Tools
                                        </Card.Title>
                                         <hr/>
                                         <p className="text-justify">
                                            My layouts will work on any device, big or small.
                                        </p>
                                        <div className="skillset">
                                            {
                                                this.state.list[2] &&
                                                this.state.list[2].map((item,i)=>{
                                                    return (
                                                        <ButtonToolbar key={i}>                               
                                                        <OverlayTrigger
                                                            overlay={
                                                            <Tooltip id={i}>
                                                                &nbsp;&nbsp;{item.Code}&nbsp;&nbsp;
                                                            </Tooltip>
                                                            }
                                                        >                                           
                                                            <Button variant="primary" id={"btn"+i} >
                                                                {item.SkillTitle} <Badge variant="light">{item.YearsOfExperience}</Badge>
                                                                <span className="sr-only">unread messages</span>
                                                            </Button>
                                                        </OverlayTrigger>
                                                    
                                                    </ButtonToolbar>
                                                    )

                                                })
                                            }
                                        </div>

                                    </Card.Body>
                                    
                                </Card>
                            </CardDeck>
                    </Col>
                </Row>
               
                {/* <Row className="justify-content-md-center">
                    <Col sm={3}>
                        <h1>
                            <Image src={designer} rounded />
                        </h1>
                        <h3>Front End </h3>
                        <hr></hr>
                        <p>
                            My skills involved in developing a website from scratch.
                            Below are the list of front end tools I am using and the years of experience I handled it
                    </p>
                        <div className="skillset">
                            {
                                this.state.list[0] &&
                                this.state.list[0].map((item,i)=>{
                                    return (
                                        <ButtonToolbar key={i}>                               
                                          <OverlayTrigger
                                            overlay={
                                              <Tooltip id={i}>
                                                &nbsp;&nbsp;{item.Code}&nbsp;&nbsp;
                                              </Tooltip>
                                            }
                                          >                                           
                                            <Button variant="primary" id={"btn"+i} >
                                                {item.SkillTitle} <Badge variant="light">{item.YearsOfExperience}</Badge>
                                                <span className="sr-only">unread messages</span>
                                            </Button>
                                          </OverlayTrigger>
                                       
                                      </ButtonToolbar>
                                    )

                                })
                            }
                        </div>
                    </Col>

                    <Col sm={3}>
                        <h1>
                            <Image src={frontend} rounded />
                        </h1>
                        <h3>Back End </h3>
                        <hr></hr>
                        <p>
                            Developing website application includes also back end tools. Below are the tools and programming languages I am using
                   </p>
                   <div className="skillset">
                            {
                                this.state.list[1] &&
                                this.state.list[1].map((item,i)=>{
                                    return (
                                        <ButtonToolbar key={i}>                               
                                          <OverlayTrigger
                                            overlay={
                                              <Tooltip id={i}>
                                                &nbsp;&nbsp;{item.Code}&nbsp;&nbsp;
                                              </Tooltip>
                                            }
                                          >                                           
                                            <Button variant="primary" id={"btn"+i} >
                                                {item.SkillTitle} <Badge variant="light">{item.YearsOfExperience}</Badge>
                                                <span className="sr-only">unread messages</span>
                                            </Button>
                                          </OverlayTrigger>
                                       
                                      </ButtonToolbar>
                                    )

                                })
                            }
                        </div>

                    </Col>

                    <Col sm={3}>
                        <h1>
                            <Image src={othertools} rounded />
                        </h1>
                        <h3>Other Tools</h3>
                        <hr></hr>
                        <p>
                            My layouts will work on any device, big or small.
                   </p>
                   <div className="skillset">
                            {
                                this.state.list[2] &&
                                this.state.list[2].map((item,i)=>{
                                    return (
                                        <ButtonToolbar key={i}>                               
                                          <OverlayTrigger
                                            overlay={
                                              <Tooltip id={i}>
                                                &nbsp;&nbsp;{item.Code}&nbsp;&nbsp;
                                              </Tooltip>
                                            }
                                          >                                           
                                            <Button variant="primary" id={"btn"+i} >
                                                {item.SkillTitle} <Badge variant="light">{item.YearsOfExperience}</Badge>
                                                <span className="sr-only">unread messages</span>
                                            </Button>
                                          </OverlayTrigger>
                                       
                                      </ButtonToolbar>
                                    )

                                })
                            }
                        </div>
                    </Col>

                </Row> */}

            </Container>
        );

    }

}

//get from rootreducer
const mapStateToProps =(state)=>{
    let data={
       list:state.aboutGetRecords
    };
    return data;
};
//get from actions
const mapActionToProps =(dispatch)=>{
    return bindActionCreators({
        aboutFetchFulfilled:aboutGetFulFilled
    },dispatch);
};

export default connect(mapStateToProps,mapActionToProps)(About);
import React, { Component } from 'react';
import { Navbar, Nav, Container,div } from 'react-bootstrap';
import {Link} from 'react-router-dom';
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pagename: "home"
    }
  }

  render() {
    let url = window.location.pathname.toString().replace("/", "");
    if (url.toLowerCase() === this.state.pagename.toLowerCase()) {
      return null;
    }
    return (
      <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark" sticky="top">
        <Container>
          <Navbar.Brand><Link  to="/home">&nbsp;My Portfolio</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <div className="nav-link" ><Link  to="/home"><i className="fa  fa-home">&nbsp;Home</i></Link></div>   
              <div className="nav-link" ><Link  to="/about"><i className="fa fa-file"> &nbsp;About</i></Link></div> 
              <div className="nav-link"><Link  to="/portfolio"><i className="fa fa-file"> &nbsp;Portfolio</i></Link></div> 
              <div className="nav-link"><Link   to="/contact"><i className="fa fa-phone-square"> &nbsp;Contact</i></Link></div>                
             </Nav>
            {/* <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-primary">Search</Button>
                          </Form> */}
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Developed by: <a href="#login">John Mark Olesco</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
export default Header;
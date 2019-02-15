import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
import gmail from './gmailIcon.png';
import linkedin from './linkedinIcon.png';
import aboutPic from './about3.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron>
          <h1 class="display-1">Julia Xu</h1>
        </Jumbotron>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <section id="about">
          <div class="container">
  				  <div class="row align-items-center">
  					  <div class="col-12 col-md-6"><img src={aboutPic} class="rounded-circle aboutPic" /></div>
  					  <div class="col-12 col-md-6">
  						  <h2>About</h2>
  						  <p>Hullo - I am currently working as a software engineer in Chicago. I graduated from UChicago in 2018, and grew up in Hong Kong and Michigan prior to that.</p>
  					  </div>
						</div>
					</div>
        </section>
        <section id="contact">
          <div class="container">
            <h2>Contact</h2>
            <a href="mailto:juliaxu@uchicago.edu"><img src={gmail} height="50vmin" width="50vmin" class="icon-right-padding"/></a><a href="https://www.linkedin.com/in/juliawxu/"><img src={linkedin} height="35vmin" width="35vmin"/></a>
          </div>
        </section>
      </div>
    );
  }
}

export default App;

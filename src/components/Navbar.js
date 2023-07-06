import React from "react";
import { Link } from "react-scroll";
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import logoImage from "../images/Facebook-removebg-preview.png"
import { Button } from "react-bootstrap";


const LCNavbar = (props) => {
  return (
    <div>
      <Navbar className="gradient_navbar" expand="lg" variant="dark">
        {" "}
        <Navbar.Brand href="#home">
          <img src={logoImage} alt="Home" className="logo_card" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav_menu">
            {props.sections.map(({ name, name_sp, id }) => (
              <Nav.Link key={id}>
                <Link
                  activeClass="active"
                  to={id}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  {props.language ? name : name_sp}
                </Link>
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
        <Button
          variant="outline-light"
          onClick={props.changeLanguage}
          className="language_button"
        >
          {props.language ? <a>Spanish</a> : <a>English</a>}
        </Button>
      </Navbar>
    </div>
  );
};

export default LCNavbar;

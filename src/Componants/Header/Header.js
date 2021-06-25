import React from 'react';
import logo from '../../fcran.png'
import { Navbar, Nav } from 'react-bootstrap';
const Header = () => {
    return (
        <Navbar collapseOnSelect  expand="sm" variant="dark">
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src={logo}
                    width="150"
                    height="30"
                    className="d-inline-block align-top"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav className="li">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#">About</Nav.Link>
                    <Nav.Link href="#">Sign Up</Nav.Link>
                    <Nav.Link href="#">Profile</Nav.Link>

                </Nav>
            </Navbar.Collapse>
            
        </Navbar>
    );
};

export default Header;
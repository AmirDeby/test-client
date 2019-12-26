import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown'

export interface INavBarProps {
}

export default class NavBar extends React.Component<INavBarProps> {
  public render() {
    return (
      <div>
            <Navbar bg="primary" expand="lg">
                <Navbar.Brand>Online Games</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link><Link style={{ color: "black" }} to="/" >Home</Link>  </Nav.Link>
                        <NavDropdown title="Games" id="basic-nav-dropdown">
                            <NavDropdown.Item > <Link style={{ color: "black" }} to="/football">FootBall</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link style={{ color: "black" }} to="/basketball">BasketBall</Link></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                </Navbar.Collapse>
                
            </Navbar>
      </div>
    );
  }
}

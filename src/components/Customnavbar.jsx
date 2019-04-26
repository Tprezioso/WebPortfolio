import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Customnavbar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect >
            <Navbar.Brand href="/">
                CODELIFE
            </Navbar.Brand>
            <Navbar.Toggle />
        <Navbar.Collapse className="bg-light justify-content-end">
            <Nav>
                <Nav.Link href="/">
                Home
                </Nav.Link>
                    <Nav.Link href="/about">
                        About
                </Nav.Link>
                    <Nav.Link href="/news">
                        News
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

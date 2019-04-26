import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './home.css'

export default class home extends Component {
  render() {
    return (
      <Container>
        <Jumbotron>
            <h2>Welcome to Code Life</h2>
            <p>This is how to build a website with react</p>
        </Jumbotron>
        <Link to="/about">
            <Button bsStyle="primary"> About </Button>
        </Link>
      </Container>
    )
  }
}

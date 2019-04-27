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
            <Link to="/about">
                <Button bsStyle="primary"> About </Button>
            </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
            <Col xs={12} sm={12} className="person-wrapper">
                    <Image src="assets/Profilepic.jpg" roundedCircle className="profile-pic" />
            <h3> Tommy </h3>
            <p>Cool ass programmer!</p>
            </Col>
        </Row>
      </Container>
    )
  }
}

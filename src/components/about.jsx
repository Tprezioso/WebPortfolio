import React, { Component } from 'react'
import { Container, Col, Image } from 'react-bootstrap';
import './about.css';

export default class about extends Component {
  render() {
    return (
      <div>
        <Image src="" className="header-image" />
        <Container>
            <Col xs={12} sm={8} smOffset={2}>
                    <Image src="" className="about-profile-pic" roundedCircle />
                    <h3>Thomas the tank Engine</h3>
                    <p>A paragraph (from the Ancient Greek παράγραφος paragraphos, "to write beside" or "written beside") is a self-contained unit of a discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences.</p>

            </Col>
        </Container>
      </div>
    )
  }
}

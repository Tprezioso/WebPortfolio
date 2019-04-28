import React, { Component } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import './news.css'

export default class news extends Component {
  render() {
    return (
      <div>
        <Image src="" className="header-image" />
        <Container>
            <h2>News</h2>
            <Row>
                <Col xs={12} sm={8} className="main-section">
                        <p>Steve wants reflections, so let's give him reflections. You got your heavy coat out yet? It's getting colder. That's a crooked tree. We'll send him to Washington. I really recommend you use odorless thinner or your spouse is gonna run you right out into the yard and you'll be working by yourself. Trees grow in all kinds of ways. They're not all perfectly straight. Not every limb is perfect.</p>

                        <p>Pretend you're water. Just floating without any effort. Having a good day. Even the worst thing we can do here is good. Take your time. Speed will come later. This is gonna be a happy little seascape.</p>

                        <p>I like to beat the brush. It looks so good, I might as well not stop. Very easy to work these to death. Don't fight it, use what happens. There comes a nice little fluffer.</p>

                        <p>We must be quiet, soft and gentle. For the lack of a better word I call them hangy downs. I was blessed with a very steady hand; and it comes in very handy when you're doing these little delicate things. Let your heart be your guide.</p>

                        <p>Let's make some happy little clouds in our world. Clouds are free they come and go as they please. Remember how free clouds are. They just lay around in the sky all day long.</p>

                        <p>That's crazy. Use what happens naturally, don't fight it. It's beautiful - and we haven't even done anything to it yet. Maybe there was an old trapper that lived out here and maybe one day he went to check his beaver traps, and maybe he fell into the river and drowned. Look at them little rascals. That's why I paint - because I can create the kind of world I want - and I can make this world as happy as I want it.</p>

                        <p>In life you need colors. These trees are so much fun. I get started on them and I have a hard time stopping. There is no right or wrong - as long as it makes you happy and doesn't hurt anyone. I started painting as a hobby when I was little. I didn't know I had any talent. I believe talent is just a pursued interest. Anybody can do what I do.</p>


                </Col>
                <Col xs={12} sm={4} className="sider-section">
                <Image src="" />
                        <p>In life you need colors. These trees are so much fun. I get started on them and I have a hard time stopping. There is no right or wrong - as long as it makes you happy and doesn't hurt anyone. I started painting as a hobby when I was little. I didn't know I had any talent. I believe talent is just a pursued interest. Anybody can do what I do.</p>

                </Col>
            </Row>

        </Container>

      </div>
    )
  }
}

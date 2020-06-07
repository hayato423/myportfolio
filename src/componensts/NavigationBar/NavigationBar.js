import React from 'react'
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import './style.css';

const NavigationBar = () => {
  return (
    <Navbar bg='light' variant='light' expand='lg' sticky='top' className='justify-content-center'>
      <Nav>
        <Container>
          <Row>
            {/*<Col>
              <Nav.Item>
                <Nav.Link href='#top'>Top</Nav.Link>
              </Nav.Item>
            </Col> */}
            <Col>
              <Nav.Item>
                <Nav.Link href='#profile'>Profile</Nav.Link>
              </Nav.Item>
            </Col>
            <Col>
              <Nav.Item>
                <Nav.Link href='#skils'>Skils</Nav.Link>
              </Nav.Item>
            </Col>
            <Col>
              <Nav.Item>
                <Nav.Link href='#works'>Works</Nav.Link>
              </Nav.Item>
            </Col>
            <Col>
              <Nav.Item>
                <Nav.Link href='#link'>Link</Nav.Link>
              </Nav.Item>
            </Col>
          </Row>
        </Container>
      </Nav>
    </Navbar>
  )
}

export default NavigationBar

import React, { useState, useEffect } from 'react'
import { Card, Button, Col, Modal, Image, Row } from 'react-bootstrap'

const WorkCard = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const modalText = props.text.modalText.split('\n').map((str) => {
    return (<span>{str}<br></br></span>)
  });

  return (
    <>
      <Col md={props.md} sm={props.sm} xs={props.xs} className='my-5'>
        <Card >
          <Card.Img variant='top' src={props.text.thumbnail} className='fluid' />
          <Card.Body>
            <Card.Title>{props.text.title}</Card.Title>
            <Card.Text>
              {props.text.cardText}
            </Card.Text>
            <Button variant='primary' onClick={handleShow}>more</Button>
          </Card.Body>
        </Card>
      </Col>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{props.text.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col >
              {/*<div className='embed-responsive embed-responsive-1by1 img-fluid'>
                <iframe className='embed-responsive-item' src={props.text.image} allowFullScreen></iframe>
                </div> */}
              <Image src={props.text.image} className='img-fluid'/>
            </Col>
          </Row>
          {modalText}
        </Modal.Body>
      </Modal>
    </>

  )
}

export default WorkCard

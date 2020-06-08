import React ,{useState}from 'react'
import {Card,Button ,Col,Modal,Image,Row} from 'react-bootstrap'
import image from './images/test.JPG';

const WorkCard = (props) => {
  const [show,setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(image);


  return (
    <>
    <Col md={props.md} sm={props.sm} xs={props.xs} className='my-5'>
    <Card >
      <Card.Img variant='top' src={image} className='fluid' />
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
          <Col>
        <Image src={props.text.image} className='img-fluid'/>
          </Col>
        </Row>
        {props.text.modalText}
        </Modal.Body>
    </Modal>
    </>

  )
}

export default WorkCard

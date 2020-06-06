import React ,{useState}from 'react'
import {Card,Button ,Col,Modal,Image,Row} from 'react-bootstrap'

const WorkCard = (props) => {
  const [show,setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
    <Col md={props.md} sm={props.sm} xs={props.xs} className='my-5'>
    <Card >
      <Card.Img variant='top' src='https://picsum.photos/960/720' className='fluid' />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          これはカードのテキストです。
        </Card.Text>
        <Button variant='primary' onClick={handleShow}>more</Button>
      </Card.Body>
    </Card>
    </Col>

    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
        <Image src='https://picsum.photos/1280/720' className='img-fluid'/>
          </Col>
        </Row>
        これはモーダルのbodyです。
        </Modal.Body>
    </Modal>
    </>

  )
}

export default WorkCard

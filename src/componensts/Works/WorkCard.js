import React ,{useState}from 'react'
import {Card,Button ,Col,Modal} from 'react-bootstrap'

const WorkCard = (props) => {
  const [show,setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
    <Col md={props.md} sm={props.sm} xs={props.xs} className='my-5'>
    <Card >
      <Card.Img variant='top' src='https://picsum.photos/200/150' />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          これはカードのテキストです。
        </Card.Text>
        <Button variant='primary' onClick={handleShow}>more</Button>
      </Card.Body>
    </Card>
    </Col>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>これはモーダルのbodyです。</Modal.Body>
    </Modal>
    </>

  )
}

export default WorkCard

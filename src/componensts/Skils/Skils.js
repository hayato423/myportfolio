import React from 'react'
import './Skils.css';
import {Container ,Row,Col} from 'react-bootstrap';

const Skils = () => {
  const skils = ['C','Java','Python','Node.js','React','Unity','Processing','Arduino','git/Github'];
  const listItems = skils.map((skil,i) =>
    <Item key={i} value={skil} className='item' />
  );
  return (
    <Container className='my-5 py-5'>
      <h1 className='skils-headline'><span className='skils-underline'>Skils</span></h1>
      <Row className='my-5 py-3'>
        {listItems}
      </Row>
    </Container>
  )
}

const Item = (props) => {
  return  <Col md={4}  sm={6} xs={12} className='col my-2'>{props.value}</Col>;
}

export default Skils

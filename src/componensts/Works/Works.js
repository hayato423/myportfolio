import React from 'react'
import './style.css'
import { Container, Row } from 'react-bootstrap'
import WorkCard from './WorkCard';

const Works = () => {
  const md = {
    span : 4,
    offset : 0
  }
  const sm = {
    span : 6,
    offset : 0
  }
  const xs = {
    span: 10,
    offset: 1
  }
  return (
    <Container className='my-5 py-5' id='works'>
      <h1 className='head-line'><span className='under-line'>Works</span></h1>
      <Row>
        <WorkCard md={md} sm={sm} xs={xs} />
        <WorkCard md={md} sm={sm} xs={xs} />
        <WorkCard md={md} sm={sm} xs={xs} />
        <WorkCard md={md} sm={sm} xs={xs} />
        <WorkCard md={md} sm={sm} xs={xs} />
        <WorkCard md={md} sm={sm} xs={xs} />
        <WorkCard md={md} sm={sm} xs={xs} />
      </Row>
    </Container>
  )
}

export default Works

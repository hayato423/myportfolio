import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';
import {Container} from 'react-bootstrap';
import './Header.css';

const Header = () => {
  return (
    <div className='header fluid '>
      <Jumbotron fluid  className='jambotron'>
        <Container>
        <h1 className='headertitle mt-0'>Hayato Terao's Portfolio</h1>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default Header

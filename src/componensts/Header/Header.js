import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';
import './Header.css';

const Header = () => {
  return (
    <div>
      <Jumbotron fluid  className='janbotron'>
        <h1 className='title'>Hayato Terao's Portfolio</h1>
      </Jumbotron>
    </div>
  )
}

export default Header

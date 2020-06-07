import React from 'react';
import './style.css';
import {Container} from 'react-bootstrap';

const Footer = () => {
  return (
    <div className='footer'>
      <h2 className='footer-head-line'>Link</h2>
      <Container>
      <a href='https://twitter.com/hayat999423'target="_blank" rel='noopener noreferrer'><i className="fab fa-twitter fa-2x mx-3 mt-3 icon"></i></a>
      <a href='https://github.com/hayato423' target="_blank" rel='noopener noreferrer'><i className="fab fa-github fa-2x mx-3 mt-3 icon"></i></a>
      <h3 className='my-3'>e-mail</h3>
      <p>hayato0423terao[at]gmail.com</p>
      </Container>
    </div>
  )
}

export default Footer

import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import icon from './icon.jpg';
import './Profile.css';

const Profile = () => {
  return (
    <Container className='py-5' id='profile'>
      <Row>
        <Col>
          <h1 className='profile-title'><span className='profile-underline'>Profile</span></h1>
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col className='mx-auto'>
          <Image src={icon} roundedCircle className='fluid img' />
        </Col>
      </Row>
      <Row>
        <Col className='mt-5'>
          <table className='profile-table mx-auto'>
            <tbody>
              <tr>
                <th >Name</th>
                <td>寺尾颯人</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th>Univercity</th>
                <td>芝浦工業大学 工学部 情報工学科</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th>Birthday</th>
                <td>1999/04/23</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th>Club</th>
                <td><a href='https://shibalab.com/' className='profile-link' target="_blank" rel='noopener noreferrer'>ShibaLab</a></td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
  )
}

export default Profile;

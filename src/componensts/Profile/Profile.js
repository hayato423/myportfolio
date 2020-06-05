import React from 'react'
import './Profile.css';

const Profile = () => {
  return (
    <div className='profile'>
      <h1 className='profile-title'><span className='profile-underline'>Profile</span></h1>
      <table className='profile-table'>
        <tbody>
        <tr>
          <th>Name</th>
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
          <td><a href='https://shibalab.com/' className='profile-link'>ShibaLab</a></td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Profile;

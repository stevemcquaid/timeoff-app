import React from 'react';
import { Link } from 'react-router-dom';

import { getCookie } from '../../../utils/cookies';

import './profile.css';

const ProfileView = ({employee}) => (
  <div className='profile'>
    <table>
      <tbody>
          <tr>
            <th>Name</th><td>{employee.name}</td>
          </tr>
          <tr>
            <th>Position</th><td>{employee.position}</td>
          </tr>
          <tr>
            <th>Role</th><td>{employee.role}</td>
          </tr>
          <tr>
            <th>Username</th><td>{employee.username}</td>
          </tr>
          {(employee.active !== false)
            ? 
            <tr className='edit-link'>
              <th></th><Link to={`/employee/update/${getCookie('id')}`} className='edit'>Edit</Link>
            </tr>
            : null
          }
      </tbody>
    </table>


    
  </div>
);

export default ProfileView;
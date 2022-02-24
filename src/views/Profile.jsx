import React from 'react';
import { Link } from 'react-router-dom';

export default function Profile() {
  return (
    <div>
      <h4>Welcome [EMPLOYEE NAME]</h4>
      <div>Name: (user.name)</div>
      <div>Email: (user.email)</div>
      <div>Birthday: (user.birthday)</div>
      <div>Bio: (user.bio)</div>
      <Link to="/profile/edit">Edit Profile</Link>
    </div>
  );
}

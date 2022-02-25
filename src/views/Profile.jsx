import React from 'react';
import { Link } from 'react-router-dom';
import { useProfile } from '../context/ProfileContext';

export default function Profile() {
  const { profile } = useProfile();
  const { name, email, bio, birthday } = profile;
  return (
    <>
      {name ? (
        <div>
          <h4>Welcome [EMPLOYEE NAME]</h4>
          <div>Name: {name}</div>
          <div>Email: {email}</div>
          <div>Birthday: {birthday}</div>
          <div>Bio: {bio}</div>
          <Link to="/profile/edit">Edit Profile</Link>
        </div>
      ) : (
        <Link to="/new-profile">Create a new profile</Link>
      )}
    </>
  );
}

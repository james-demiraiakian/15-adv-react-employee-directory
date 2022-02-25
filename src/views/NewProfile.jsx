import React, { useState } from 'react';
import { useProfile } from '../context/ProfileContext';
import { useUser } from '../context/UserContext';
import { getProfile } from '../services/profiles';

export default function NewProfile() {
  const { setProfile } = useProfile();
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [birthday, setBirthday] = useState('');
  const {
    user: { email },
  } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await setProfile(name, email, bio, birthday);
    const resp = await getProfile();
    console.log(resp);
  };

  return (
    <div>
      <h4>Enter new employee information.</h4>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Name: </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <div>Email: {email}</div>
        <label>Birthday: </label>
        <input type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
        <label>Bio: </label>
        <input type="textarea" value={bio} onChange={(e) => setBio(e.target.value)} />
        <button type="submit">Create Profile</button>
        {/* Redirect to profile on submit */}
      </form>
    </div>
  );
}

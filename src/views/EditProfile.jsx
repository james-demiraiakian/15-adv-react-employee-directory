import React, { useState } from 'react';
import { useProfile } from '../context/ProfileContext';

export default function EditProfile() {
  const {
    profile,
    profile: { email },
  } = useProfile();
  const [name, setName] = useState(profile.name);
  const [bio, setBio] = useState(profile.bio);
  const [birthday, setBirthday] = useState(profile.birthday);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h4>Edit your profile information</h4>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Name: </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <div>Email: {email}</div>
        <label>Birthday: </label>
        <input type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
        <label>Bio: </label>
        <input type="textarea" value={bio} onChange={(e) => setBio(e.target.value)} />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

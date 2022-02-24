import React from 'react';

export default function EditProfile() {
  return (
    <div>
      <h4>Edit your profile information</h4>
      <form>
        <label>Name: </label>
        <input type="text" />
        <div>Email: (user.email)</div>
        <label>Birthday: </label>
        <input type="date" />
        <label>Bio: </label>
        <input type="textarea" />
        <button>Save</button>
      </form>
    </div>
  );
}

import React from 'react';

export default function NewProfile() {
  return (
    <div>
      <h4>Enter new employee information.</h4>
      <form>
        <label>Name: </label>
        <input type="text" />
        <div>Email: (user.email)</div>
        <label>Birthday: </label>
        <input type="date" />
        <label>Bio: </label>
        <input type="textarea" />
        <button>Create Profile</button>
        {/* Redirect to profile on submit */}
      </form>
    </div>
  );
}

import React from 'react';

export default function Register() {
  return (
    <div>
      <form>
        <p>Please enter your email and password to register a new account.</p>
        <p>Password must be 8 characters long.</p>
        <label>Email: </label>
        <input type="email" />
        <label>Password: </label>
        <input type="password" />
        <button>Register</button>
        {/*onClick send to new profile */}
      </form>
    </div>
  );
}

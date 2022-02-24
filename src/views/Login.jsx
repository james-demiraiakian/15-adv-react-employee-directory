import React from 'react';

export default function Login() {
  return (
    <div>
      <p>Please enter your email and password to log in.</p>
      <form>
        <label>Email: </label>
        <input type="email" />
        <label>Password: </label>
        <input type="password" />
        <button>Submit</button>
        {/* Button checks data, then redirects to profile page*/}
      </form>
    </div>
  );
}

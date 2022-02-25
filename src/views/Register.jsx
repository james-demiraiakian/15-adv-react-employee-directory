import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { signUpUser } from '../services/users';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useUser();
  const [regState, setRegState] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 8) {
      alert('Password must be 8 or more characters long');
    } else {
      await signUpUser(email, password);
      setUser(email, password);
      setRegState(true);
    }
  };

  return (
    <div>
      {!regState ? (
        <form onSubmit={(e) => handleSubmit(e)}>
          <p>Please enter your email and password to register a new account.</p>
          <p>Password must be 8 or more characters long.</p>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Register</button>
          {/*onClick send to new profile */}
        </form>
      ) : (
        <>
          <p>Please confirm registration in your email.</p>
          <Link to="/login">Log In</Link>
        </>
      )}
    </div>
  );
}

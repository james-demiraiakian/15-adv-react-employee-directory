import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { signInUser } from '../services/users';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, setUser } = useUser();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUser(email, password);
    await signInUser(email, password);
    console.log(user);
    history.replace('/profile');
  };
  return (
    <div>
      <p>Please enter your email and password to log in.</p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Submit</button>
        {/* Button checks data, then redirects to profile page*/}
      </form>
    </div>
  );
}

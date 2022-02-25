import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import { getUser, signInUser } from '../services/users';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUser(email, password);
    // await signInUser(email, password);
    // const user = await getUser();
    // console.log(user);
  };
  return (
    <div>
      <p>Please enter your email and password to log in.</p>
      <form onSubmit={(e) => handleSubmit(e.target.value)}>
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

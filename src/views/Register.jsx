import React from 'react';
import { useHistory } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { useForm } from '../hooks/useForm';
import { signUpUser } from '../services/users';

export default function Register() {
  const { handleChange, formState } = useForm;
  const { setUser } = useUser();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUser(formState.email, formState.password);
    await signUpUser(formState.email, formState.password);
    history.replace('/');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Please enter your email and password to register a new account.</p>
        <p>Password must be 8 characters long.</p>
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" onChange={(e) => handleChange(e)} />
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" onChange={(e) => handleChange(e)} />
        <button type="submit">Register</button>
        {/*onClick send to new profile */}
      </form>
    </div>
  );
}

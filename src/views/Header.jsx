import React from 'react';
import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { signOutUser } from '../services/users';

export default function Header() {
  const history = useHistory();

  const handleLogin = () => {
    history.push('/login');
  };

  const handleLogout = () => {
    signOutUser();
    history.push('/');
  };
  return (
    <div>
      <h1>ACME Rocket-Powered Products</h1>
      <h4>Welcome (user ? user.name : Valued Employee)</h4>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
}

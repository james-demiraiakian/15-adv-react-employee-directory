import React from 'react';
import { useHistory } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { signOutUser } from '../services/users';

export default function Header() {
  const history = useHistory();
  const { user } = useUser();
  const name = user.name;

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
      <h4>Welcome {name ? { name } : 'Valued Employee'}</h4>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <p>Welcome text and other info goes here</p>
      <Link to="/login">Sign In</Link>
      <Link to="/register">Register</Link>
    </div>
  );
}

'use client';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';
import { axios } from 'axios';

export const LoginPage = () => {
  const [user, setUser] = React.useState({
    email: '',
    password: '',
  });

  const onLogin = async () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      
      <hr />
      <label htmlFor="email">email</label>
      <input
        className="p-2"
        id="email"
        type="text"
        value={user.email}
        onChange={(newEmail) => {
          setUser({ ...user, email: newEmail.target.value });
        }}
        placeholder="email"
      />
      <hr />
      <label htmlFor="password">password</label>
      <input
        className="p-2"
        id="password"
        type="text"
        value={user.password}
        onChange={(newPassword) => {
          setUser({ ...user, password: newPassword.target.value });
        }}
        placeholder="password"
      />
      <button className="" onClick={onLogin}>
        Signup here
      </button>
      <Link href="/signup">Vist Signup page</Link>
    </div>
  );
};

export default LoginPage;

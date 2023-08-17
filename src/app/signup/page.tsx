'use client';
import Link from "next/link";
import React from  "react";
import { useRouter } from "next/router";
import { axios } from "axios";

export const SignupPage=()=>{
  const [user, setUser] = React.useState({
    email:'',
    password:'',
    username: '',
  })

  const onSignup  =async () => {
    
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Sign up</h1>
      <hr />
      <label htmlFor="username">username</label>
      <input
        className="p-2"
        id="username"
        type="text"
        value={user.username}
        onChange={(newUser) => {
          setUser({ ...user, username: newUser.target.value });
        }}
        placeholder="username"
      />
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
      <button className="" onClick={onSignup}>Signup here</button>
      <Link href="/login" >Vist login page</Link>
    </div>
  );
}


export default SignupPage;

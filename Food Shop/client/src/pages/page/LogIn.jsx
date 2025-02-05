import React from 'react';
import useAuth from '../../hooks/useAuth';
import GoogleSignIn from '../shared/GoogleSignIn';
import axios from 'axios';
import { Link } from 'react-router-dom';

const LogIn = () => {

  // TODO 1: add navigate register page link
  // TODO 2: google signin link

  const { logInUser } = useAuth();

  const handleLogIn = e => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    logInUser(email, password)
    .then(res => {
      console.log(res.user)
      fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(email, password),
      })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
    })
    .then(err => console.log(err))
  }

  return (
    <div className="card w-full max-w-sm shrink-0 mx-auto">
      <h2 className="text-3xl text-center font-bold mt-6"> Log In Form </h2>
      <GoogleSignIn />
      <form onSubmit={handleLogIn} className="card-body pt-0">
        <div className="form-control">
          <label className="label">
            <span className="label-text"> Email </span>
          </label>
          <input name='email' type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"> Password </span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-yellow-800 text-white"> Log In </button>
        </div>
      </form>
      <h2 className='text-center mb-5'> New user? <Link to={'/register'} className="text-yellow-800 font-semibold"> Register Here </Link></h2>
    </div>
  );
};

export default LogIn;
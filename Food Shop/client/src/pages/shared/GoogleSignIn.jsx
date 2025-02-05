import React from 'react';
import useAuth from '../../hooks/useAuth';

const GoogleSignIn = () => {

  const { signInWithGoogle } = useAuth();

  // const handleSignInWithGoogle = () => {

  //   signInWithGoogle()
  //   .then(res => {
  //     console.log(res.user)
  //     fetch('http://localhost:5000/login', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       credentials: 'include',
  //     })
  //       .then(res => res.json())
  //       .then(data => console.log(data))
  //       .catch(err => console.log(err));
  //   })
  //   .then(err => console.log(err))
  // }

  return (
    <div className='flex mt-7 flex-col w-full items-center justify-center'>
      <button onClick={signInWithGoogle} className='btn w-80'> Continue With Google </button>
      <div className="">
        <div className="divider w-80 mb-0 flex items-center justify-center"> OR </div>
      </div>
    </div>
  );
};

export default GoogleSignIn;
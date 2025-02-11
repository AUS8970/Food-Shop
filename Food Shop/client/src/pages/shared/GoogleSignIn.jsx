import React from 'react';
import useAuth from '../../hooks/useAuth';

const GoogleSignIn = () => {

  const { signInWithGoogle } = useAuth();

  return (
    <div className='flex mt-7 flex-col w-full items-center justify-center'>
      <button onClick={signInWithGoogle} className='btn w-80 bg-yellow-700 hover:bg-yellow-800 text-white'> Continue With Google </button>
      <div className="">
        <div className="divider w-80 mb-0 flex items-center justify-center"> OR </div>
      </div>
    </div>
  );
};

export default GoogleSignIn;
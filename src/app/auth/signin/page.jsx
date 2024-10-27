"use client"; // Menyatakan ini adalah komponen client

import { signIn } from 'next-auth/react';

const SignIn = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-semibold text-center mb-6">Login to Your Account</h1>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png' width={100} height={100} style={{margin: '70px auto'}} alt='Google'/>
        <button
          className="w-full bg-blue-600 text-white py-2 my-2 rounded-md hover:bg-blue-500 transition"
          onClick={() => signIn('google')}
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;

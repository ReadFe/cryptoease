"use client";
import React from 'react'
import Image from 'next/image'
import Logo from '../../public/assets/logo.png'
import { signOut, useSession } from 'next-auth/react';

const Navbar = ({features}) => {
  const {data: session} = useSession()

  return (
    <div className="w-screen sticky top-0 z-10 bg-white border-b-2 border-black">
      <div className='flex justify-between p-[15px] gap-5'>
          <Image
              src={Logo}
              width={120}
              height={40}
              alt='Logo'
          />
        <div className='features flex w-full items-center justify-end'>
            <ul className='features flex gap-5'>
                {
                  features ? features.map((item, i) => {
                      return (
                        <a key={i} href={`#${item.toLowerCase()}`}> {item} </a>
                      )
                    })
                  : null
                }
            </ul>
        </div>
        <div className="auth">
          {!session
            ? (
              <div className="flex gap-3">
                <button className='auth-button w-max bg-buttonGray'>Sign In</button>
                <button className='auth-button bg-buttonBlack text-gray-300'>Register</button>
              </div>
            ) : (
              <div className="flex gap-3">
                  <button onClick={() => signOut()} className='auth-button bg-buttonBlack text-gray-300'>Logout</button>
              </div>
            ) 
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar

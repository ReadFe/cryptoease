"use-client";

import React from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

const Demolayout = ({children}) => {
  return (
    <>
    <Navbar/>
    <div className='main-content grid grid-cols-[20%_80%] gap-3'>
        <ul className='sticky top-0 sidebar m-[0_auto] bg-white'>
            <li>
            <Link href="/demo/narative">Narrative Research</Link>
            </li>
            <li>
            <Link href="/demo/technical">Technical Research</Link>
            </li>
            <li>
            <Link href="/demo/fundamental">Fundamental Research</Link>
            </li>
        </ul>
        <section className='border-2 border-slate-300 h-full p-5'>
            {children}
        </section>
    </div>
    </>
  )
}

export default Demolayout

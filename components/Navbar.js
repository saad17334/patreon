"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import { useSession, signIn, signOut } from "next-auth/react"
import Dashboard from '@/app/dashboard/page';

const Navbar = () => {
    const { data: session } = useSession()
    return (
        <nav className='bg-gray-900 text-gray-200'>
            <ul className='flex items-center justify-between max-w-7xl mx-auto py-2 px-2'>
                <li>
                    <Link href={"/"}>
                        <div style={{ fontSize: '1.8rem', color: 'white' }}>𝓟𝓪𝓮𝓽𝓻𝓸𝓷</div>
                    </Link>
                </li>
                <div className='flex items-center gap-4'>
                    {session && (
                        <Link href={"/dashboard"}>
                            <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-4 py-2.5 text-center leading-5'>Welcome {session.user.email}</button>
                        </Link>)
                    }
                    {session && (
                        <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-4 py-2.5 text-center leading-5' onClick={() => signOut()}>Logout</button>
                    )}
                    {!session && (
                        <Link href={"/login"}>
                            <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-4 py-2.5 text-center leading-5'>Login</button>
                        </Link>
                    )}
                </div>
            </ul>
        </nav>
    )
}

export default Navbar
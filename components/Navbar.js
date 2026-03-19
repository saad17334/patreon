"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import { useSession, signOut } from "next-auth/react"
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const { data: session } = useSession()
    const [open, setOpen] = useState(false)

    const btn = "text-white bg-gradient-to-br from-purple-600 to-blue-500 rounded-full text-sm px-4 py-2 w-full"

    return (
        <nav className='bg-gray-900 text-gray-200'>
            <div className='max-w-7xl mx-auto flex items-center justify-between px-4 py-3'>

                {/* Logo */}
                <Link href={"/"} className="flex-1 sm:flex-none flex justify-center sm:justify-start">
                    <div className='text-white text-xl sm:text-2xl font-bold'>
                        𝓟𝓪𝓮𝓽𝓻𝓸𝓷
                    </div>
                </Link>

                {/* Desktop Buttons */}
                <div className='hidden sm:flex items-center gap-2'>

                    {session && (
                        <>
                            <Link href={`/${session.user.name}`}>
                                <button className={btn}>Profile</button>
                            </Link>

                            <Link href={"/dashboard"}>
                                <button className={btn}>Dashboard</button>
                            </Link>

                            <button
                                onClick={() => signOut({ callbackUrl: '/' })}
                                className={btn}
                            >
                                Logout
                            </button>
                        </>
                    )}

                    {!session && (
                        <Link href={"/login"}>
                            <button className={btn}>Login</button>
                        </Link>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="sm:hidden text-white"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {open && (
                <div className="sm:hidden flex flex-col items-center gap-3 pb-4">

                    {session && (
                        <div className="flex gap-2 w-[90%]">

                            <Link href={`/${session.user.name}`} className="w-1/3">
                                <button
                                    onClick={() => setOpen(false)}
                                    className={btn}
                                >
                                    Profile
                                </button>
                            </Link>

                            <Link href={"/dashboard"} className="w-1/3">
                                <button
                                    onClick={() => setOpen(false)}
                                    className={btn}
                                >
                                    Dashboard
                                </button>
                            </Link>

                            <button
                                onClick={() => {
                                    setOpen(false);
                                    signOut({ callbackUrl: '/' });
                                }}
                                className="w-1/3 text-white bg-gradient-to-br from-purple-600 to-blue-500 rounded-full text-sm px-4 py-2"
                            >
                                Logout
                            </button>

                        </div>
                    )}

                    {!session && (
                        <Link href={"/login"} className="w-[90%]">
                            <button
                                onClick={() => setOpen(false)}
                                className={btn}
                            >
                                Login
                            </button>
                        </Link>
                    )}
                </div>
            )}
        </nav>
    )
}

export default Navbar
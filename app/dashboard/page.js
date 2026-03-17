"use client"
import React from 'react'
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const Dashboard = () => {
    const { data: session, status } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (status !== 'authenticated') {
            router.push('/login')
        }
    }, [status, router])

    if (status === 'loading') {
        return <div className="text-white text-center mt-20">Loading...</div>
    }
    return (
        <div>
            <form className='flex flex-col gap-4 mt-20 mx-auto justify-center items-center'>
                <h1 className='text-white text-2xl font-bold'>Welcome to your Dashboard</h1>
                <input type="text" placeholder='Your Name' className='p-2 rounded-lg bg-gray-800 text-white w-[300px]' />
                <input type="email" placeholder='Your Email' className='p-2 rounded-lg bg-gray-800 text-white w-[300px]' />
                <input type="text" placeholder='UserName' className='p-2 rounded-lg bg-gray-800 text-white w-[300px]' />
                <input type="text" placeholder='Profile Picture URL' className='p-2 rounded-lg bg-gray-800 text-white w-[300px]' />
                <input type="text" placeholder='Cover Picture URL' className='p-2 rounded-lg bg-gray-800 text-white w-[300px]' />
                <input type="text" placeholder='razorPay Credentials' className='p-2 rounded-lg bg-gray-800 text-white w-[300px]' />
                <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-4 py-2.5 text-center leading-5'>Update Profile</button>
            </form>
        </div>
    )
}

export default Dashboard
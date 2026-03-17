import React from 'react'

const Username = async ({ params }) => {
    const { username } = await params;
    return (
        <>
            <div className='relative w-full'>
                <img src="/cover.jpg" alt="Cover Picture" style={{ width: '100%', height: '35vh', objectFit: 'cover', display: 'block' }} />
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <img src="/man.jpg" alt="Profile Picture" style={{ width: '150px', height: '150px', borderRadius: '50%', border: '4px solid white', position: 'relative', zIndex: 1 }} />
                </div>
            </div>
            <div className="text-white text-2xl font-bold text-center mt-20">
                @{username}
                <div className="text-sm text-gray-400 mt-1">Creator & Artist</div>
            </div>
            <div className="text-white text-center mt-4">
                Welcome to my Patreon page! I'm a passionate creator sharing exclusive content and behind-the-scenes insights. Join me on this creative journey and get access to unique rewards and experiences. Thank you for your support!
            </div>
            <div className="text-white text-center mt-4">
                <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-4 py-2.5 text-center leading-5'>Become a Patron</button>
            </div>
            <div className='payment flex gap-3 text-white w-[80%] mx-auto mt-6 mb-10'>
                <div className='supporters w-1/2 bg-slate-900 p-2 rounded-lg'>
                    <h2 className='text-white text-lg font-bold mb-4 text-center'>Supporters</h2>
                    <ul className='grid gap-4 text-sm p-4'>
                        <li>John Doe donated $10/month with a message "Thank you for your support!"</li>
                        <li>Jane Smith donated $5/month with a message "Keep up the great work!"</li>
                        <li>Bob Johnson donated $20/month with a message "Thank you for your support!"</li>
                        <li>John Doe donated $10/month with a message "Thank you for your support!"</li>
                        <li>Jane Smith donated $5/month with a message "Keep up the great work!"</li>
                        <li>Bob Johnson donated $20/month with a message "Thank you for your support!"</li>
                    </ul>
                </div>
                <div className='makepayment w-1/2 bg-slate-900 p-4 rounded-lg'>
                    <h2 className='text-white text-lg font-bold mb-4'>Make a Payment</h2>
                    <div className='flex flex-col gap-4'>
                        <input type="text" placeholder='Name' className='p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500' />
                        <input type="text" placeholder='Enter Message' className='p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500' />
                        <input type="text" placeholder='Enter Amount' className='p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500' />
                        <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-4 py-2.5 text-center leading-5'>Donate</button>
                    </div>
                    <div className='flex gap-4 mt-4'>
                        <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-4 py-2.5 text-center leading-5'>pay $10</button>
                        <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-4 py-2.5 text-center leading-5'>pay $20</button>
                        <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-4 py-2.5 text-center leading-5'>pay $50</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Username
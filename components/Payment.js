"use client"
import React, { useEffect, useState } from 'react'
import Script from 'next/script'
import { initiate, fetchpayments, fetchuser } from '@/actions/useractions';
import { useSession } from "next-auth/react"
import toast from 'react-hot-toast';

const Payment = ({ username }) => {

    const { data: session } = useSession();

    const [paymentform, setPaymentForm] = useState({
        name: "",
        message: "",
        amount: ""
    })
    const [currentUser, setcurrentUser] = useState({});
    const [Payments, setPayments] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const handleChange = (e) => {
        setPaymentForm({ ...paymentform, [e.target.name]: e.target.value })
    }

    const getData = async () => {
        let u = await fetchuser(username);
        setcurrentUser(u);
        let dbpayment = await fetchpayments(username);
        setPayments(dbpayment);
    }

    const pay = async (amount) => {
        let a = await initiate(amount, username, paymentform);
        let orderId = a.id;

        var options = {
            key: currentUser.razorPayId,
            amount: amount,
            currency: "INR",
            name: "Acme Corp",
            order_id: orderId,

            handler: async function (response) {
                await fetch("/api/razorpay", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(response),
                });

                setPaymentForm({ name: "", message: "", amount: "" });
                await getData();
                toast.success("Payment Successful! 🎉");
            },
        };

        var rzp1 = new Razorpay(options);
        rzp1.open();
    }

    return (
        <>
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

            <div className='relative w-full'>
                <img
                    src={currentUser.coverPic}
                    className="w-full h-40 sm:h-56 md:h-72 object-cover"
                    alt="Cover"
                />

                <div className="absolute left-1/2 -translate-x-1/2 translate-y-1/2 bottom-0">
                    <img
                        src={currentUser.profilePic}
                        className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white object-cover"
                        alt="Profile"
                    />
                </div>
            </div>

            <div className="text-white text-center mt-16 px-4">
                <h1 className="text-xl sm:text-2xl font-bold">@{username}</h1>
                <p className="text-sm text-gray-400">Creator & Artist</p>

                <p className="mt-4 text-sm sm:text-base max-w-2xl mx-auto text-gray-300">
                    Welcome to my Patreon page! Join me on this creative journey and support my work.
                </p>
                
            </div>

            <div className='flex flex-col lg:flex-row gap-6 text-white max-w-6xl mx-auto px-4 mt-8 mb-10'>

                <div className='w-full lg:w-1/2 bg-slate-900 p-4 rounded-lg'>
                    <h2 className='text-lg font-bold mb-4 text-center'>Supporters</h2>

                    <ul className='grid gap-3 text-sm'>
                        {Payments.length === 0 && (
                            <p className='text-center text-gray-400'>
                                No supporters yet.
                            </p>
                        )}

                        {Payments.map((p) => (
                            <li key={p._id} className="bg-gray-800 p-2 rounded">
                                {p.name} donated ₹{p.amount}
                                <br />
                                <span className="text-gray-400">"{p.message}"</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='w-full lg:w-1/2 bg-slate-900 p-4 rounded-lg'>
                    <h2 className='text-lg font-bold mb-4'>Make a Payment</h2>

                    <div className='flex flex-col gap-4'>
                        <input name="name" onChange={handleChange} value={paymentform.name} placeholder='Name' className='p-2 rounded bg-gray-800' />
                        <input name="message" onChange={handleChange} value={paymentform.message} placeholder='Message' className='p-2 rounded bg-gray-800' />
                        <input name="amount" onChange={handleChange} value={paymentform.amount} placeholder='Amount' className='p-2 rounded bg-gray-800' />

                        <button
                            onClick={() => pay(paymentform.amount * 100)}
                            className='bg-gradient-to-br from-purple-600 to-blue-500 rounded-full px-4 py-2 text-sm'
                            disabled={
                                paymentform.name.length < 3 ||
                                paymentform.message.length < 3 ||
                                paymentform.amount.length < 1
                            }
                        >
                            Donate
                        </button>
                    </div>

                    <div className='flex flex-wrap gap-3 mt-4 justify-center'>
                        <button className='bg-gradient-to-br from-purple-600 to-blue-500 rounded-full px-4 py-2 text-sm' onClick={() => pay(1000)}>₹10</button>
                        <button className='bg-gradient-to-br from-purple-600 to-blue-500 rounded-full px-4 py-2 text-sm' onClick={() => pay(2000)}>₹20</button>
                        <button className='bg-gradient-to-br from-purple-600 to-blue-500 rounded-full px-4 py-2 text-sm' onClick={() => pay(5000)}>₹50</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Payment;
import React from 'react'
import Payment from '@/components/Payment';

const Username = async ({ params }) => {
    const { username } = await params;
    return (
        <>
            <Payment username={username} />
        </>
    )
}

export default Username
"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {

    const router = useRouter();

    return (
        <div className='min-h-screen h-full bg-dark flex flex-col gap-5 items-center justify-center'>
            <span className='text-yellow text-2xl font-semibold'>
                You successfully submit form
            </span>
            <button
                className='outline-none bg-yellow text-white py-2 px-5 rounded-3xl font-semibold'
                onClick={() => router.push('/')}
            >
                Back to home page
            </button>
        </div>
    )
}

export default page
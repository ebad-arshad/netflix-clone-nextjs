'use client';
import React, { FormEvent, useRef, useState } from 'react'
import Button from '../Button'

const Email = () => {

    const [inputStatus, setInputStatus] = useState('');
    const emailRef = useRef<HTMLInputElement | null>(null);

    const validEmail = new RegExp(
        '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
    );
    const handleEmail = (e?: FormEvent<HTMLFormElement>) => {
        e?.preventDefault();
        if (!validEmail.test(emailRef.current?.value!)) {
            setInputStatus(e => 'red');
            return;
        }
        else {
            setInputStatus(e => 'green');
            return;
        }
    }

    return (
        <div className='flex lg:w-1/2 mx-auto justify-center items-center gap-2 mt-4 flex-wrap'>
            <form onSubmit={handleEmail}
                className='lg:flex-1 w-full sm:w-auto'
            >
                <input ref={emailRef} type="text" placeholder='Email address'
                    className={`py-3 text-md w-full border h-12 ${inputStatus === 'green' ? 'border-green-500' : inputStatus === 'red' ? 'border-red-500' : 'border-[#232323]'}  bg-black bg-opacity-40 text-white pl-4 rounded`}
                />
            </form>
            <Button handleFunc={handleEmail} className='w-full sm:w-auto h-12 py-3 px-5 text-lg' value='Get Started' />
        </div>
    )
}

export default Email
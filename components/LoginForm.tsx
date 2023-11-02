'use client';

import { Input, PasswordInput } from '@mantine/core'
import React, { FormEvent, useRef, useState } from 'react'
import Button from './Button'
import { ToastContainer, toast } from 'react-toastify';
import { signIn, useSession } from 'next-auth/react';

const LoginForm = () => {

    const { data: session } = useSession();

    const [inputStatus, setInputStatus] = useState(true);

    const emailRef = useRef<HTMLInputElement | null>(null);
    const passRef = useRef<HTMLInputElement | null>(null);

    const validEmail = new RegExp(
        '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
    );

    const handleEmail = (e?: FormEvent<HTMLFormElement>) => {
        e?.preventDefault();
        if (!validEmail.test(emailRef.current?.value!) || passRef.current?.value.length! < 4) {
            setInputStatus(e => false);
            toast.error('Invalid email or password!', {
                position: "bottom-right",
                autoClose: 1000,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return;
        }
        signIn('github');
    }

    return (
        <>
            <form onSubmit={handleEmail} className="flex flex-col gap-3">
                <Input error={!inputStatus} ref={emailRef} required size='md' placeholder='Email' variant='filled' />
                <PasswordInput error={!inputStatus} ref={passRef} required size='md' placeholder='Password' />
                <Button handleFunc={handleEmail} className='mt-10 px-4 text-md h-12' value='Sign In' />
            </form>
            <ToastContainer
                position="bottom-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                draggable
                theme="dark"
            />
        </>
    )
}

export default LoginForm
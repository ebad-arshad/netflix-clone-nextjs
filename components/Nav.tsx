'use client';
import logo from '@/assets/images/logo.svg'
import Image from 'next/image'
import Button from './Button'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react';


const Nav = ({ btn, className }: { className?: string, btn?: boolean }) => {

    const { data: session } = useSession();

    return (
        <div className={`${className} flex pt-7 justify-between item-center`
        }>
            <Link href={'/home'}>
                <Image src={logo} width={0} height={0} className='md:scale-125 translate-x-4 relative left-0' alt='Logo' />
            </Link>
            {
                btn === undefined &&
                <Link href={'/login'}>
                    <Button handleFunc={session ? signOut : undefined} className='h-8 px-4 text-sm' value={!session ? 'Sign In' : 'Log out'} />
                </Link>
            }
        </div >
    )
}

export default Nav
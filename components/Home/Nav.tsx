import React from 'react'
import logo from '@/assets/images/logo.svg'
import Image from 'next/image'
import Button from '../Button'
import Link from 'next/link'

const Nav = () => {
    return (
        <div className='flex pt-7 justify-between item-center'>
            <Image src={logo} width={0} height={0} className='md:scale-125 relative left-0' alt='Logo' />
            <Link href={'/login'}>
                <Button className='bg-red flex h-8 items-center justify-center active:opacity-80 hover:bg-red/70 transitions text-white rounded px-4 text-sm font-bold' value='Sign In' />
            </Link>
        </div>
    )
}

export default Nav
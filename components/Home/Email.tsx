import React from 'react'
import Button from '../Button'

const Email = () => {
    return (
        <div className='flex lg:w-1/2 mx-auto justify-center items-center gap-2 mt-4 flex-wrap'>
            <input type="text" placeholder='Email address'
                className='py-3 text-md w-full sm:w-auto lg:flex-1 border h-12 border-[#232323] bg-black bg-opacity-40 text-white pl-4 rounded'
            />
            <Button className='bg-red w-full sm:w-auto flex items-center justify-center h-12 active:opacity-80 text-white rounded hover:bg-red/70 py-3 px-5 transitions text-lg font-bold' value='Get Started' />
        </div>
    )
}

export default Email
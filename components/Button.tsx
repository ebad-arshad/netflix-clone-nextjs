'use client';
import React from 'react'

const Button = ({ value, className, handleFunc }: { handleFunc?: () => void, value: string, className: string }) => {
    return (
        <button
            onClick={handleFunc}
            className={`${className} bg-red flex items-center justify-center active:opacity-80 hover:bg-red/70 transitions text-white rounded font-bold`}
        >
            {value}
        </button>
    )
}

export default Button
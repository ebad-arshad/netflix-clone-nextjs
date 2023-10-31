import React from 'react'

const Button = ({ value, className }: { value: string, className: string }) => {
    return (
        <button
            className={className}
        >
            {value}
        </button>
    )
}

export default Button
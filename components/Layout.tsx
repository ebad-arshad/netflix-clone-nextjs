import React from 'react'

const Layout = ({ children, className }: {
    children: React.ReactNode,
    className?: string,
}) => {
    return (
        <div className={`xl:container mx-auto px-10 ${className}`}>{children}</div>
    )
}

export default Layout
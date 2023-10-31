const Label = ({ paras, headingData, className }: { paras: string[], className?: string, headingData: string[] }) => {
    return (
        <div className={`text-white flex flex-col ${className} gap-4`}>
            {headingData.map((v, i) => (
                <p key={i} className='font-bold text-3xl sm:text-4xl lg:text-5xl'>{v}</p>
            ))}

            {paras.map((v, i) => (
                <p key={i} className=' sm:text-lg lg:text-xl'>{v}</p>
            ))}
        </div>
    )
}

export default Label
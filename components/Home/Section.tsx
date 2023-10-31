import React from 'react'
import Label from './Label'
import Image, { StaticImageData } from 'next/image'


const Section = ({ headingData, para, img }: { img?: StaticImageData, headingData: string[], para: string[] }) => {
    return (
        <div className='flex flex-col lg:odd:flex-row-reverse lg:flex-row items-center gap-4 py-14 border-t-[6px] border-t-[#232323]'>
            <Label className='items-center text-center lg:items-start lg:text-start' headingData={headingData} paras={para} />
            {img &&
                <Image
                    src={img}
                    width={0}
                    height={0}
                    className='lg:w-[515px] lg:h-[386px]'
                    alt='sec-1'
                />
            }
        </div>
    )
}

export default Section
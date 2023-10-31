import React from 'react'
import Label from './Label'
import Email from '@/components/Home/Email'

const Hero = () => {
    return (
        <>
            <Label
                className='mt-36 items-center text-center'
                headingData={['Unlimited movies, TV shows, and more']}
                paras={["Watch anywhere. Cancel anytime.", 'Ready to watch? Enter your email to create or restart your membership.']}
            />
            <Email />
        </>
    )
}

export default Hero
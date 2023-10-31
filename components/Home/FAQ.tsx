import MyAccordion from '@/components/Home/MyAccordion'
import Email from '@/components/Home/Email'

const FAQ = () => {
    return (
        <div className='py-14 border-t-[6px] border-t-[#232323] text-white flex flex-col'>
            <p className='font-bold text-center text-3xl sm:text-4xl lg:text-5xl'>Frequently Asked Questions</p>
            <MyAccordion />
            <p className='text-center text-lg'>Ready to watch? Enter your email to create or restart your membership.</p>
            <Email />
        </div>
    )
}

export default FAQ
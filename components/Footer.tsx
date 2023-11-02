'use client';

import React from 'react'

const Footer = () => {
    return (
        <div className='pb-20 border-t-[6px] border-t-[#232323] gap-4 pt-16 text-[#c5c4c4] flex flex-col text-sm'>
            <a className='underline w-fit' target='_blank' href='https://help.netflix.com/en/contactus'>Questions? Contact us.</a>
            <div
                className='flex flex-row flex-wrap gap-4 underline py-5'
            >
                <ul
                    className='w-[250px] flex flex-col gap-2'
                >
                    <li><a target='_blank' href="https://help.netflix.com/en/node/412">FAQ</a></li>
                    <li><a target='_blank' href="https://help.netflix.com/en/">Help Center</a></li>
                    <li><a target='_blank' href="https://www.netflix.com/pk/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fyouraccount">Account</a></li>
                    <li><a target='_blank' href="https://media.netflix.com/en/">Media Center</a></li>
                </ul>
                <ul
                    className='w-[250px] flex flex-col gap-2'
                >
                    <li><a target='_blank' href="https://ir.netflix.net/ir-overview/profile/default.aspx">Investor Relations</a></li>
                    <li><a target='_blank' href="https://jobs.netflix.com/">Jobs</a></li>
                    <li><a target='_blank' href="https://devices.netflix.com/en/">Ways to Watch</a></li>
                    <li><a target='_blank' href="https://help.netflix.com/legal/termsofuse">Terms of Use</a></li>
                </ul>
                <ul
                    className='w-[250px] flex flex-col gap-2'
                >
                    <li><a target='_blank' href="https://help.netflix.com/legal/privacy">Privacy</a></li>
                    <li><a target='_blank' href="https://help.netflix.com/legal/corpinfo">Corporate Information</a></li>
                    <li><a target='_blank' href="https://help.netflix.com/en/contactus">Contact Us</a></li>
                    <li><a target='_blank' href="https://fast.com/">Speed Test</a></li>
                </ul>
                <ul
                    className='w-[250px] flex flex-col gap-2'
                >
                    <li><a target='_blank' href="https://help.netflix.com/legal/notices">Legal Notices</a></li>
                    <li><a target='_blank' href="https://www.netflix.com/pk/browse/genre/839338">Only on Netflix</a></li>
                </ul>
            </div>
            <p>Netflix Pakistan</p>
        </div >
    )
}

export default Footer
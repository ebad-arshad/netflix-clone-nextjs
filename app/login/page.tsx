'use client';
import styles from './Login.module.css'
import Nav from '@/components/Nav'
import Layout from '@/components/Layout'
import { Checkbox } from '@mantine/core';
import EmailForm from '@/components/LoginForm';
import Footer from '@/components/Footer';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

const Login = () => {

    const { data: session } = useSession();
    if (session) {
        redirect('/main');
    }

    return (
        <Layout className='!px-0 md:!px-10'>
            <div className="h-screen">
                <div className={styles.bgImage} />
                <div className={styles.shadow} />
                <Nav btn={false} className='hidden md:block' />
                <div className='md:w-[450px] h-full md:h-auto mx-auto w-full p-16 bg-black md:bg-black/70 flex flex-col gap-3 md:mt-10 pb-40'>
                    <h1 className='text-white font-bold text-3xl mb-4 text-center md:text-left'>Sign In</h1>
                    <EmailForm />
                    <div
                        className='text-gray-400 text-sm flex sm:justify-between flex-col sm:flex-row items-center mt-2 sm:mt-0 gap-5 sm:gap-0'
                    >
                        <div>
                            <Checkbox
                                label="Remember me"
                                color="gray"
                                size="xs"
                                radius={'xs'}
                            />
                        </div>
                        <a className='hover:underline transitions' href='https://www.netflix.com/pk/LoginHelp' target='_blank'>Need help?</a>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    )
}

export default Login
import './globals.css'
import { getServerSession } from 'next-auth'
import SessionProvider from '@/components/SessionProvider'
import { Poppins } from 'next/font/google'
import { MantineProvider, ColorSchemeScript } from '@mantine/core'
import '@mantine/core/styles.css';

const poppins = Poppins({ subsets: ['latin'], weight: "400" })


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession();

  return (
    <html lang="en">
      <head><ColorSchemeScript /></head>
      <body className={poppins.className}>
        {/* <SessionProvider session={session}> */}
        <MantineProvider>{children}</MantineProvider>
        {/* </SessionProvider> */}
      </body>
    </html>
  )
}
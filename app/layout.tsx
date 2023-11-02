import './globals.css'
import { getServerSession } from 'next-auth'
import SessionProvider from '@/components/SessionProvider'
import { Ubuntu } from 'next/font/google'
import { MantineProvider, ColorSchemeScript } from '@mantine/core'
import '@mantine/core/styles.css';
import 'react-toastify/dist/ReactToastify.css';

const ubuntu = Ubuntu({ subsets: ['latin'], weight: "400", display: 'swap', adjustFontFallback: false })

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession();

  return (
    <html lang="en">
      <head><ColorSchemeScript /></head>
      <body className={ubuntu.className}>
        <SessionProvider session={session}>
          <MantineProvider>{children}</MantineProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
import './globals.css'

import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Inter } from 'next/font/google'

import { MainNav } from '@/components/main-nav'
import { SiteHeader } from '@/components/site-header'

const WalletAdapter = dynamic(() => import('@/components/wallet-adapter'), {
  ssr: false,
})
const ThemeProvider = dynamic(() => import('@/components/theme-provider'), {
  ssr: false,
})
const WalletModal = dynamic(() => import('@/components/wallet-modal'), {
  ssr: false,
})

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Token Machine',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider enableSystem attribute="class" defaultTheme="system">
          <WalletAdapter>
            <SiteHeader />
            {children}
            <WalletModal />
          </WalletAdapter>
        </ThemeProvider>
      </body>
    </html>
  )
}

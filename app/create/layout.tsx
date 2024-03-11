import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Token Machine | Create',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}

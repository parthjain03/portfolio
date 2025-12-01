import type { Metadata } from 'next'
import { Crimson_Text, Geist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import ThemeProvider from '@/components/theme-provider'

const _geistSans = Geist({ subsets: ["latin"] })
const _crimsonText = Crimson_Text({ weight: ['400', '600', '700'], subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'Parth Jain — Aerospace Engineer',
  description: 'Portfolio showcasing aerospace engineering projects including rocketry and spacecraft thermal systems',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}

import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import Provider from './(Providers)/NextUiProvider'

const inter = Inter({ subsets: ['latin'],variable: '--font-inter'})

const monserrat = Montserrat({subsets: ['latin'], variable: '--font-montserrat'})

export const metadata: Metadata = {
  title: 'Becodemy AI Prompts Marketplace',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${monserrat.variable}`}>
        <ClerkProvider>
        <Provider>
        {children}
        </Provider>
        </ClerkProvider>
        
        </body>
    </html>
  )
}

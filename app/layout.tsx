import { Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import { Header } from './compnents/header'
import { ContactForm } from './compnents/contact-form'
import { Footer } from './compnents/footer'
import { BackToTop } from './compnents/back-to-top'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
})

// tudo que vai aparecer em todas as paginas deve vir no RootLayout
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plexMono.variable}`}>
      <body>
        <Header/>
        {children}
        <ContactForm/>
        <Footer/>
      </body>
      <BackToTop/>
    </html>
  )
}

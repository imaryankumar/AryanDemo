import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <Navbar/>
      <div className="min-h-[calc(100vh-64px)] ">
      <Component {...pageProps} />
      </div>
  <Footer />
  
  </>
}

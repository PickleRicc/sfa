import { useEffect } from 'react'
import Head from 'next/head'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Force a re-render of styles
    document.body.className = document.body.className
  }, [])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen">
        <Component {...pageProps} />
      </div>
    </>
  )
}

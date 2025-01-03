import { useEffect } from 'react'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Force a re-render of styles
    document.body.className = document.body.className
  }, [])

  return (
    <div className="min-h-screen">
      <Component {...pageProps} />
    </div>
  )
}

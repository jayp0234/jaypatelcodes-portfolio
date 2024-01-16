import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import { Albert_Sans } from 'next/font/google'
import Head from "next/head"
import { useRouter } from 'next/router'

const albert_sans = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-albert"
})

export default function App({ Component, pageProps }) {

  const router = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${albert_sans.variable} font-albert bg-light w-full min-h-screen dark:bg-dark`}>
        <NavBar />
       <AnimatePresence mode="wait">
       <Component key={router.asPath} {...pageProps} />
       </AnimatePresence>
        <Footer />
      </main>
    </>
  )
}

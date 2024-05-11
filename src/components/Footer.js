import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
   <footer className='w-full border-t-2 border-solid border-dark
   font-medium text-base dark:text-light dark:border-light sm:text-base '>
    <Layout className='py-4 flex items-center justify-between lg:flex-col lg:py-3 sm:py-1'>
        <span>
            {new Date().getFullYear()} &copy; All Rights Reserved
        </span>
        <div className='flex items-center lg:py-1'>
        <Link href="/">Build by Jay Patel</Link>
        </div>
        <Link href="https://www.google.com/search?gs_ssp=eJzj4tDP1TcwLDI2MmD0Yk9OzElPLKoEADD2BXs&q=calgary&rlz=1C5CHFA_enCA1080CA1080&oq=calgary&gs_lcrp=EgZjaHJvbWUqEggBEC4YQxiDARixAxiABBiKBTIHCAAQABiPAjISCAEQLhhDGIMBGLEDGIAEGIoFMgYIAhBFGEAyBggDECMYJzISCAQQABhDGIMBGLEDGIAEGIoFMhIIBRAuGEMYgwEYsQMYgAQYigUyDAgGEAAYQxiABBiKBTIYCAcQLhhDGIMBGMcBGLEDGNEDGIAEGIoF0gEJNjA1M2owajE1qAIAsAIA&sourceid=chrome&ie=UTF-8" target={"_blank"}>Calgary, AB, CA</Link>
    </Layout>
   </footer>
  )
}

export default Footer
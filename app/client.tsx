'use client'
import { Lexend, Open_Sans } from 'next/font/google'
import Link from "next/link";
import "./globals.css";
import 'katex/dist/katex.min.css';
import { CloseButton, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { AnimatePresence, motion, easeOut } from "framer-motion"
import { useState } from "react"

const font = Lexend({
  subsets: ['latin'],
})

const font1 = Open_Sans({
  subsets: ['latin'],
})

export default function Client(){
    const [isVisible, setIsVisible] = useState(true)
    return (
        <>
        <div className="sticky top-0 z-10 bg-white">
          <div className={font1.className}>
            <header className="border-b">
              <div className="justify-around text-2xl xl:w-2/3 lg:text-2xl md:text-lg md:w-11/12 w-4/5 mx-auto flex">
                <Disclosure>
                  <DisclosureButton>
                    <Bars3Icon className="size-6 inline-block sm:hidden" /></DisclosureButton>
                  <DisclosurePanel>
                    <div className="fixed z-0 left-0 top-0 bg-black/20 w-full h-full"></div>
                        <div className="fixed z-1 left-0 h-full bg-white border-r">
                            <div className="p-4 flex mb-4">
                                <Link className="inline-block mt-1.5 font-bold text-sm hover:underline" href="/" >ldimitrop.net</Link>
                                <CloseButton className="ml-3 inline-block"><XMarkIcon className="size-8" /></CloseButton>
                            </div>
                            <ul className="px-8">
                                <li><Link href="/tools" className='mt-2'>Tools</Link></li>
                                <li><Link href="/blog" className='mt-2'>Blog</Link></li>
                            </ul>
                        </div>
                  </DisclosurePanel>
                </Disclosure>
                <Link href="/"><div className={`bg-blue-400 font-semibold py-6 px-10 -mb-6 text-white text-center truncate overflow-hidden ${font.className}`}>ldimitrop.net</div></Link>
                <Link className="self-center py-3 hidden sm:inline-block" href="/tools">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 inline-block -mt-1 mr-2">
                    <path fillRule="evenodd" d="M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clipRule="evenodd" />
                  </svg>
                  <div className="inline-block">Tools</div>
                </Link>
                <Link href="/blog" className="self-center py-3 hidden sm:inline-block">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 inline-block -mt-1 mr-2">
                    <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
                  </svg>
                  <div className="inline-block">Blog</div>
                </Link>
                <Link href="/documents" className="self-center hidden sm:inline-block">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 inline-block -mt-1 mr-2">
                    <path fillRule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z" clipRule="evenodd" />
                    <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
                  </svg>
                  Documents
                </Link>
                <div className="self-center hidden sm:inline-block">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 inline-block -mt-1 mr-2">
                    <path fillRule="evenodd" d="M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z" clipRule="evenodd" />
                  </svg>
                  Games
                </div>
                <div className="self-center hidden sm:inline-block">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 inline-block -mt-1 mr-2">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm0 8.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM15.375 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0ZM7.5 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z" clipRule="evenodd" />
                  </svg>
                  More
                </div>
              </div>
            </header>
          </div>
        </div>
        </>
    )
}
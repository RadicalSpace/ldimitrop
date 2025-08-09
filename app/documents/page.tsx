'use client'
import Link from "next/link"
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { AnimatePresence, easeOut, motion } from 'framer-motion'
import { Fragment } from 'react'


export default function Documents() {
    return(
        <>
        <div className="flex flex-wrap mx-24 my-16">
            <Disclosure as="div" className="w-full max-w-md p-12">
                {({ open }) => (
                    <>
                    <DisclosureButton className="w-full border-b pb-2 text-left text-3xl font-bold">Practice Sets (Psets)<ChevronRightIcon className="size-10 inline-block " /></DisclosureButton>
                    <div className="overflow-hidden py-2">
                        <AnimatePresence>
                        {open && (
                            <DisclosurePanel static as={Fragment}>
                            <motion.div
                                initial={{ opacity: 0, y: -24 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -24 }}
                                transition={{ duration: 0.2, ease: easeOut }}
                                className="origin-top"
                            >
                                <ul>
                                    <li>
                                        <div className="hover:pl-6 transition-all duration-200 ease-in-out mb-2">
                                            <Link href="./leche.pdf" className="hover:bg-blue-100/50 mb-2 p-2 transition-all duration-200 ease-in-out">
                                                LeCHe I (AP Calc AB Practice)
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="hover:pl-6 transition-all duration-200 ease-in-out mb-2">
                                            <Link href="./electron_configs.pdf" className="hover:bg-blue-100/50 mb-2 p-2 transition-all duration-200 ease-in-out">
                                                Electron Config. Practice
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="hover:pl-6 transition-all duration-200 ease-in-out mb-2">
                                            <Link href="./ochem.pdf" className="hover:bg-blue-100/50 mb-2 p-2 transition-all duration-200 ease-in-out">
                                                Oh No, It's OChem!
                                            </Link>
                                        </div>
                                    </li>
                                </ul>
                            </motion.div>
                            </DisclosurePanel>
                        )}
                        </AnimatePresence>
                    </div>
                    </>
                )}
            </Disclosure>
            <Disclosure as="div" className="w-full max-w-md p-12">
                {({ open }) => (
                    <>
                    <DisclosureButton className="w-full border-b pb-2 text-left text-3xl font-bold">Chemistry<ChevronRightIcon className="size-10 inline-block " /></DisclosureButton>
                    <div className="overflow-hidden py-2">
                        <AnimatePresence>
                        {open && (
                            <DisclosurePanel static as={Fragment}>
                            <motion.div
                                initial={{ opacity: 0, y: -24 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -24 }}
                                transition={{ duration: 0.2, ease: easeOut }}
                                className="origin-top"
                            >
                                <ul>
                                    <li>
                                        <div className="hover:pl-6 transition-all duration-200 ease-in-out mb-2">
                                            <Link href="./electron_configs.pdf" className="hover:bg-blue-100/50 mb-2 p-2 transition-all duration-200 ease-in-out">
                                                Electron Config. Practice
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="hover:pl-6 transition-all duration-200 ease-in-out mb-2">
                                            <Link href="./ochem.pdf" className="hover:bg-blue-100/50 mb-2 p-2 transition-all duration-200 ease-in-out">
                                                Oh No, It's OChem!
                                            </Link>
                                        </div>
                                    </li>
                                </ul>
                            </motion.div>
                            </DisclosurePanel>
                        )}
                        </AnimatePresence>
                    </div>
                    </>
                )}
            </Disclosure>
        </div>
        </>
    )
}
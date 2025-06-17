import type { Metadata } from "next";
import { Lexend, Open_Sans } from 'next/font/google'
import Link from "next/link";
import "./globals.css";
import 'katex/dist/katex.min.css';
import { CloseButton, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import Client from "./client";


const font = Lexend({
  subsets: ['latin'],
})

const font1 = Open_Sans({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "ldimitrop.net",
  description: "A site about me!",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Client />
        {children}
      </body>
    </html>
  );
}

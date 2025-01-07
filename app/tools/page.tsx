'use client'
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { Lexend } from "next/font/google";

const lexend = Lexend()

const roboto = Poppins({
  weight:["400"]
})

export default function Tools() {
  return (
    <div className="App">
      <div className="text-center py-28">
        <div className="font-bold text-7xl">Tools</div>
        <div className="mt-8 text-xl italic">All the web tools I have made over the years...</div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-20 gap-16">
        <Link href="/">
          <div className={`bg-blue-400 text-4xl p-10 text-center text-white ${lexend.className} font-semibold`}>ldimitrop.net</div>
        </Link>
        <Link href="https://radicalspace.github.io/tab-markers/" target="_blank">
          <div className={`bg-[rgb(95,121,88)] text-4xl p-10 text-center text-white ${roboto.className}`}>Tab Markers</div>
        </Link>
        <Link href="https://radicalspace.github.io/stv-simulator/" target="_blank">
          <div className={`bg-[rgb(31,82,129)] text-4xl p-10 text-center text-white ${roboto.className}`}>STV Simulator</div>
        </Link>
      </div>
    </div>
  );
}

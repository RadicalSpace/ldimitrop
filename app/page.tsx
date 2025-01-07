import Image from "next/image";
import imageAsset from '../public/dark_blue_jacket.jpg'
import { Open_Sans } from "next/font/google";

const font = Open_Sans({
  subsets: ['latin'],
})

export default function Home() {
  return (
    <div className={`${font.className}`}> 
      <div className="text-center font-bold text-7xl py-28">Home Page</div>
      <div className="mx-28 flex">
        <div className="bg-blue-400 p-4 text-2xl flex-grow text-white font-bold mr-8">Hello</div>
        <div>
          <img src='/dark_blue.png' alt="dark blue jacket" className="right-0 w-96 h-96 object-cover border object-left-top flex-none" />
          <div className="bg-gray-200 text-gray-400 p-4 font-bold mt-2">hello</div>
        </div>
      </div>
    </div>
  );
}

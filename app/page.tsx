import { Open_Sans } from "next/font/google";

const font = Open_Sans({
  subsets: ['latin'],
})

export default function Home() {
  return (
    <div className={`${font.className}`}> 
      <div className="text-center font-bold text-7xl py-28">Home Page</div>
      <div className="lg:mx-28 md:mx-4 sm:flex">
        <div className="bg-blue-400 p-4 text-2xl sm:flex-grow text-white font-bold lg:mr-8 md:mr-4">Hello</div>
        <div>
          <img src={`/ldimitrop/dark_blue.png`} alt="dark blue jacket" className="right-0 sm:w-96 sm:h-96 w-full  object-cover border object-left-top flex-none" />
          <div className="bg-gray-200 text-gray-400 p-4 font-bold sm:mt-2">hello</div>
        </div>
      </div>
    </div>
  );
}

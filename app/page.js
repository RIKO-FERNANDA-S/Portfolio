import Image from "next/image";
import Img from "@/public/image/imgHome/img1.png"
import Navbar from "./components/layouts/navbar";
import {Rajdhani} from "next/font/google"
import {Lilita_One} from "next/font/google"
import About from "./components/layouts/about";
import Certificate from "./components/layouts/certificate";
import Footer from "./components/layouts/footer";

const rajdhani = Rajdhani({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

const lilita = Lilita_One({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  return (
    <div className="">
      <nav>
        <Navbar/>
      </nav>

      <main className="bg-gradient-to-b from-[#5fe4ffa8] to-[#2d2a45c7] flex-col-reverse flex lg:flex-row gap-4 w-full justify-start lg:justify-center items-center h-max py-20 lg:py-0 px-10">
        <div className={`w-full lg:w-1/2 flex gap-4 flex-col ${rajdhani.className}`}>
          <h1 className="text-white text-5xl font-semibold">I am Riko</h1>
          <div className="text-[#00FFFF]  w-full h-full lg:pb-5  ">
          <h1 className={` text-4xl lg:text-[4.5em] font-extrabold leading-tight ${lilita.className}`}>Front End Developer + UX Designer</h1>
          </div>
          <p className="text-xl lg:text-3xl text-white font-semibold">Haii, yuk  saling mengenal, bisa scroll kebawah</p>
          <div className="flex gap-5 lg:mt-8">
            <a href=" https://wa.me/6285707180120" className="rounded-2xl bg-[#02F3D3] py-2 px-4 font-semibold text-xl">Contact Me</a>
            <button className="rounded-2xl bg-[#02F3D3] py-2 px-4 font-semibold text-xl hidden lg:flex">Scroll Down</button>
          </div>
        </div>
        <div className="lg:w-1/2 h-max flex justify-center items-center self">
        <Image src={Img} alt="img" className="w-4/5"></Image>
        </div>
      </main>
        {/* <About/> */}

        <Certificate/>

      <Footer/>
    </div>
  );
}

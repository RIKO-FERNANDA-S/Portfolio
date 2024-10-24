"use client"
import { useEffect } from "react";
import Image from "next/image";
import Img from "@/public/image/imgHome/img1.png"
import {Rajdhani} from "next/font/google"
import {Lilita_One} from "next/font/google"
import AOS from 'aos';
import React from 'react'



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

function Hero() {
    useEffect(() => {
        AOS.init({
          duration: 1000
        });
      }, [])
  return (
    <main>
        <div className="lg:bg-gradient-to-bl bg-gradient-to-b from-[#5fe4ff79] via-[#2d2a45c7] to-[#2d2a45c7] flex-col-reverse flex lg:flex-row gap-4 text-center lg:text-start w-full justify-start lg:justify-center items-center h-max lg:h-[100vh] py-20 lg:py-0 px-10 lg:pt-5">
        <div className={`w-full lg:w-1/2 flex gap-2 lg:gap-3 flex-col ${rajdhani.className}`}>
          <h1 className="text-white text-3xl lg:text-5xl font-semibold">I am Riko</h1>
          <div className="text-[#00FFFF]  w-full h-full lg:pb-5  ">
          <h1 className={` text-4xl lg:text-[4.5em] font-extrabold leading-9 lg:leading-[4.4rem] bg-gradient-to-r from-[#00FFFF] to-[#8A2BE2] bg-clip-text text-transparent py-2 ${lilita.className}`}>Front End Developer + UX Designer</h1>
          </div>
          <p className="text-xl lg:text-3xl text-white font-semibold">Haii, yuk  saling mengenal, bisa scroll kebawah</p>
          <div className="flex gap-5 mt-6 lg:mt-8 w-full justify-center lg:justify-start">
            <a href=" https://wa.me/6285707180120" className="rounded-xl border text-white bg-transparent border-white py-2 px-4 font-semibold text-xl">Contact Me</a>
            <a href="#certificate" className="rounded-xl border text-white bg-transparent border-white py-2 px-4 font-semibold text-xl flex">Scroll Down</a>
          </div>
        </div>
        <div className="lg:w-1/2 w-full h-max flex justify-center items-center self max-md:mb-11">
        <Image data-aos="fade-left" src={Img} alt="img" className="w-4/5"></Image>
        </div>
      </div>
    </main>
  )
}

export default Hero
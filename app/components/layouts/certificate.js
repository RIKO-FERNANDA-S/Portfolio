import React from 'react'
import {Lilita_One} from "next/font/google"
import Image from 'next/image'
import img1 from "@/public/image/certificates/a.png"
import img2 from "@/public/image/certificates/b.png"
import img3 from "@/public/image/certificates/c.png"
import img4 from "@/public/image/certificates/d.png"
import img5 from "@/public/image/certificates/e.png"
import img6 from "@/public/image/certificates/f.jpg"
import img7 from "@/public/image/certificates/g.jpg"
import img8 from "@/public/image/certificates/h.jpg"
import img9 from "@/public/image/certificates/i.png"
import img10 from "@/public/image/certificates/s.png"

const lilita = Lilita_One({
    weight: ['400'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
  })

function Certificate() {
  return (
    <main id='certificate' className='w-full lg:h-[100vh] flex flex-col justify-center pt-20'>
        <h1 className={`text-5xl text-center text-white ${lilita.className}`}>CERTIFICATES</h1>
        <div className='w-full h-max px-10 py-7 flex flex-wrap gap-7 justify-center'>
            <div className='w-full lg:w-1/4'>
                <Image src={img1}></Image>
            </div>
            <div className='w-full lg:w-1/4'>
                <Image src={img2}></Image>
            </div>
            <div className='w-full lg:w-1/4'>
                <Image src={img3}></Image>
            </div>
            <div className='w-full lg:w-1/4'>
                <Image src={img4}></Image>
            </div>
            <div className='w-full lg:w-1/4'>
                <Image src={img5}></Image>
            </div>
            <div className='w-full lg:w-1/4'>
                <Image src={img6}></Image>
            </div>
            <div className='w-full lg:w-1/4'>
                <Image src={img7}></Image>
            </div>
            <div className='w-full lg:w-1/4'>
                <Image src={img8}></Image>
            </div>
            <div className='w-full lg:w-1/4'>
                <Image src={img9}></Image>
            </div>
            <div className='w-full lg:w-1/4'>
                <Image src={img10}></Image>
            </div>
        </div>
    </main>
  )
}

export default Certificate
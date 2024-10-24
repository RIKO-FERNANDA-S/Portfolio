"use client"
import React, {useEffect} from 'react'
import {Lilita_One} from "next/font/google"
import {Rajdhani} from "next/font/google"
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
import AOS from 'aos'
import Link from 'next/link'



const lilita = Lilita_One({
    weight: ['400'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
  })

  const rajdhani = Rajdhani({
    weight: ['400', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
  })


function Certificate() {

    useEffect(() => {
        AOS.init({
          duration: 500
        });
      }, [])

  return (
    <main id='certificate' className='w-full h-max flex flex-col justify-center mb-5'>
        
        <h1 className={`text-5xl lg:text-7xl text-stroke text-center text-transparent pt-10  ${lilita.className}`}>CERTIFICATES</h1>
        <div className='w-full h-max px-10 py-7 flex flex-wrap gap-7 justify-center'>
            <div data-aos="flip-left" className='w-max hover:scale-[1.1] hover:duration-100 hover:ease-in-out lg:w-1/4 '>
                <Image src={img1} alt='img' className='h-52 w-auto'></Image>
            </div>
            <div data-aos="flip-left" className='w-max hover:scale-[1.1] hover:duration-100 hover:ease-in-out lg:w-1/4 '>
                <Image src={img2} alt='img' className='h-52 w-auto'></Image>
            </div>
            <div data-aos="flip-left" className='w-max hover:scale-[1.1] hover:duration-100 hover:ease-in-out lg:w-1/4 '>
                <Image src={img3} alt='img' className='h-52 w-auto'></Image>
            </div>
            <div data-aos="flip-left" className='w-max hover:scale-[1.1] hover:duration-100 hover:ease-in-out lg:w-1/4 '>
                <Image src={img4} alt='img' className='h-52 w-auto'></Image>
            </div>
            <div data-aos="flip-left" className='w-max hover:scale-[1.1] hover:duration-100 hover:ease-in-out lg:w-1/4 '>
                <Image src={img10} alt='img' className='h-52 w-auto'></Image>
            </div>

            <div data-aos="flip-left" className='w-max hover:scale-[1.1] hover:duration-100 hover:ease-in-out lg:w-1/4 '>
                <Image src={img6} alt='img' className='h-52 w-auto'></Image>
            </div>
            {/* <div data-aos="flip-left" className='w-max hover:scale-[1.1] hover:duration-100 hover:ease-in-out lg:w-1/4 '>
                <Image src={img7} alt='img' className='h-52 w-auto'></Image>
            </div>
            <div data-aos="flip-left" className='w-max hover:scale-[1.1] hover:duration-100 hover:ease-in-out lg:w-1/4 '>
                <Image src={img8} alt='img' className='h-52 w-auto'></Image>
            </div>
            <div data-aos="flip-left" className='w-max hover:scale-[1.1] hover:duration-100 hover:ease-in-out lg:w-1/4 '>
                <Image src={img9} alt='img' className='h-52 w-auto'></Image>
            </div>
            <div data-aos="flip-left" className='w-max hover:scale-[1.1] hover:duration-100 hover:ease-in-out lg:w-1/4 '>
                <Image src={img5} alt='img' className='h-52 w-auto'></Image>
            </div>
     */}
        </div>
        <div className='w-full flex justify-center'>
             <Link href={'/'} className={`text-white ${rajdhani.className} w-full lg:w-[30rem] py-3 border border-white text-center max-md:mx-4 rounded-lg`}>Show More</Link>
        </div>
    </main>
  )
}

export default Certificate
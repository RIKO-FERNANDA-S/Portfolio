"use client";
import React from "react";
import { Lilita_One } from "next/font/google";
import Image from "next/image";
import Globe from "@/public/image/navbar/globe.png"
import Sun from "@/public/image/navbar/sun.png"
import Link from "next/link";


const lilita = Lilita_One({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

function Navbar() {
  return (
    <nav className="w-full hidden lg:flex h-max py-3 px-11 absolute z-10 backdrop-blur-sm justify-between pt-5">
      <div
        className={` flex gap-12 text-white text-2xl font-bold ${lilita.className}`}
      >
        <Link href={'/'}>Home</Link>
        <Link href={'/about'}>About Me</Link>
        <Link href={'/projects'}>Projects</Link>
        <Link href={'/certificate'}>Certificates</Link>
      </div>
      <div className="hidden lg:flex gap-5">
        <button className="w-max h-max rounded-full flex bg-slate-400 p-2">
          <Image src={Globe} alt="icons" className="w-8"/>
        </button>
        <button className="w-max h-max rounded-full bg-slate-400 p-2">
        <Image src={Sun} alt="icons" className="w-8"/>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

"use client";
import React from "react";
import { Lilita_One } from "next/font/google";
import Image from "next/image";
import Globe from "@/public/image/navbar/globe.png"
import Sun from "@/public/image/navbar/sun.png"

const lilita = Lilita_One({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

function Navbar() {
  return (
    <nav className="w-full flex h-max py-3 px-11 fixed z-10 backdrop-blur-sm justify-between pt-8">
      <div
        className={` flex gap-12 text-white text-2xl font-bold ${lilita.className}`}
      >
        <a href="#">Home</a>
        {/* <h1>About Me</h1>
        <h1>Projects</h1> */}
        <a href="#certificate">Certificates</a>
      </div>
      <div className="hidden lg:flex gap-5">
        <button className="w-max h-max rounded-full flex bg-slate-400 p-2">
          <Image src={Globe} className="w-8"/>
        </button>
        <button className="w-max h-max rounded-full bg-slate-400 p-2">
        <Image src={Sun} className="w-8"/>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

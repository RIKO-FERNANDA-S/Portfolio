"use client";
import dynamic from "next/dynamic";
import Lenis from "lenis";
import { useEffect } from "react";

const Hero = dynamic(() => import("./components/layouts/hero"), { ssr: false });
const NavMobile = dynamic(() => import("./components/layouts/navMobile"), {
  ssr: false,
});
const Navbar = dynamic(() => import("./components/layouts/navbar"), {
  ssr: false,
});
const Certificate = dynamic(() => import("./components/layouts/certificate"), {
  ssr: false,
});
const Footer = dynamic(() => import("./components/layouts/footer"), {
  ssr: false,
});

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="">
      <nav>
        <Navbar />
        <NavMobile />
      </nav>

      <section >
        <Hero />
        {/* <About/> */}
        <Certificate />
      </section>

      <Footer />
    </main>
  );
}

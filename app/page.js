import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./components/layouts/hero"), {ssr: false})
const NavMobile = dynamic(() => import("./components/layouts/navMobile"), {ssr: false})
const Navbar = dynamic(() => import("./components/layouts/navbar"), {ssr: false})
const Certificate = dynamic(() => import("./components/layouts/certificate"), {ssr: false})
const Footer = dynamic(() => import("./components/layouts/footer"), {ssr: false})



export default function Home() {



  return (
    <main className="">
      <nav>
        <Navbar/>
        <NavMobile/>
      </nav>

      <Hero/>
        {/* <About/> */}

        <Certificate/>

      <Footer/>
    </main>
  );
}

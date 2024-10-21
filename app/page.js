import Image from "next/image";
import Img from "@/public/image/imgHome/img1.png"
import Navbar from "./components/layouts/navbar";

export default function Home() {
  return (
    <div className="bg-gradient-to-bl from-[#5fe4ff85] to-[#2d2a4573]">
      <nav>
        <Navbar/>
      </nav>

      <main className="flex gap-4 w-full justify-center items-center h-[100vh] px-10">
        <div className="w-1/2 flex gap-4 flex-col">
          <h1 className="text-white text-5xl">I am Riko</h1>
          <div className="bg-gradient-to-r from-[#00FFFF] to-[#8A2BE2] w-full h-full bg-clip-text text-transparent pb-5  ">
          <h1 className="judul text-[4em] font-extrabold leading-tight">Fullstack Developer + UX Designer</h1>
          </div>
          <p className="text-3xl text-white ">Haii, yuk  saling mengenal, bisa scroll kebawah</p>
          <div className="flex gap-5 mt-8">
            <button className="rounded-2xl bg-[#02F3D3] py-2 px-4 font-medium text-xl">Contact Me</button>
            <button className="rounded-2xl bg-[#02F3D3] py-2 px-4 font-medium text-xl">Scroll Down</button>
          </div>
        </div>
        <div className="w-1/2 h-max flex justify-center items-center self">
        <Image src={Img} alt="img" className="w-4/5"></Image>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}

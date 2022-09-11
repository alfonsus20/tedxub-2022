import { Icon } from "@iconify/react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";

import background from "../assets/images/home/background.png";
import background2 from "../assets/images/home/background-2.jpg";

import leftHand from "../assets/images/home/left.png";
import rightHand from "../assets/images/home/right.png";
import banner from "../assets/images/home/banner.png";
import CardSpeaker from "../components/CardSpeaker";

const Home = () => {
  const containerRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(20);
  const [borderRadius, setBorderRadius] = useState(50);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const offsetTop = containerRef.current?.offsetTop;
      const scrollPosition = Math.round(window.scrollY);
      const percentage = Math.ceil((scrollPosition / offsetTop) * 80);
      const percentageRadius = Math.ceil((scrollPosition / offsetTop) * 50);

      if (containerHeight >= 20 && containerHeight <= 100 && percentage <= 80) {
        setContainerHeight(20 + percentage);
      }

      if (borderRadius >= 50 && borderRadius <= 100 && percentageRadius <= 50) {
        setBorderRadius(50 - percentageRadius);
      }
    });
  }, [containerHeight, borderRadius]);

  useEffect(() => {
    console.log({ amount: containerRef.current?.offsetTop });
  }, [containerRef.current]);

  return (
    <div id="home">
      <section
        className="bg-[#f0f0f0] pt-6 min-h-screen relative overflow-y-hidden bg-cover bg-fixed flex flex-col"
        style={{ backgroundImage: `url("${background}")` }}
      >
        <Navbar />
        <div className="pt-8 px-14 mx-auto flex relative items-center w-full min-h-[70vh]">
          <div className="w-7/12">
            <p className="text-2xl font-bold mb-2">Welcome to</p>
            <p className="uppercase font-akira text-3xl">
              <span className="text-main-3">TEDX</span>Universitas Brawijaya
            </p>
            <h1 className="text-7xl font-sedgwick text-main-3 my-6">
              Merayakan Kembali:
            </h1>
            <h2 className="text-2xl font-bold text-[#2B2B2B] mb-2">
              Menggeledah arus, menilik ruang
            </h2>
            <p className="text-6xl font-bold font-shrikhand text-[#2B2B2B] mb-4">
              2022
            </p>
            <div className="text-lg font-semibold">
              <p>Graha WidyaLoka Universitas Brawijaya, Malang</p>
              <p>Minggu, 2 Oktober 2022</p>
            </div>
          </div>
          <div className="w-5/12">ads</div>
          <button
            className="rounded-full p-4 border-2 border-[#2B2B22] w-fit text-[#2B2B22] absolute left-1/2 -translate-x-1/2 bottom-2"
            onClick={() => {
              window.scrollTo({
                behavior: "smooth",
                top: containerRef.current?.offsetTop,
              });
            }}
          >
            <Icon icon="akar-icons:arrow-down" className="text-3xl" />
          </button>
        </div>
        <div
          id="video-container"
          className="relative overflow-hidden"
          ref={containerRef}
          style={{
            height: `${containerHeight}vh`,
            borderRadius: `${borderRadius}% ${borderRadius}% 0 0`,
          }}
        >
          <div className="w-[120%] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden flex justify-center items-center">
            <video className="w-[85%] h-full mx-auto">
              <source src="https://api.tedxuniversitasbrawijaya.com/storage/TEDxUniversitasBrawijaya%202021%20_Manifestasi%20Peradaban_%20Opening%20Titles.mp4" />
            </video>
          </div>
          <h1 className="text-center text-white text-3xl z-10 top-1/2 absolute left-1/2 -translate-x-1/2  -translate-y-1/2 pb-8 ">
            #MERAYAKAN <strong>KEMBALI</strong>
          </h1>
        </div>
      </section>
      <section
        className="text-center bg-cover py-40 overflow-x-hidden rounded-b-[100%_50%] relative z-20"
        style={{ backgroundImage: `url("${background2}")` }}
      >
        <div className="flex flex-col items-center mb-8 relative">
          <img
            src={leftHand}
            alt="left"
            className="absolute -left-56 top-[-21rem] w-[48rem]"
          />
          <div className="font-sedgwick">
            <h2 className="text-8xl text-main-3">
              <span className="text-white">Me</span>rayakan
            </h2>
            <h3 className="text-8xl mt-6">kembali</h3>
          </div>
          <div
            className="px-12 py-10 bg-[length:110%_125%] bg-top bg-no-repeat"
            style={{ backgroundImage: `url("${banner}")` }}
          >
            <p className="text-xl font-semibold text-white">
              Menggeledah Arus, Menilik Ruang
            </p>
          </div>
          <img
            src={rightHand}
            alt="left"
            className="absolute -right-56 top-[-18rem] w-[48rem]"
          />
        </div>
        <p className="max-w-[70%] mx-auto font-medium">
          TEDxUniversitasBrawijaya 2022 kali ini akan membawa penonton melalui
          perjalanan istirahat dari kejenuhan dan kompleksitas yang telah
          terbentuk dengan kembali menjelajahi makna nilai kearifan lokal
          sebagai ruang untuk kembali pada akar, mengambil bekal dalam menjalani
          era modernitas saat ini. Penelusuran ini sebagai pengingat kepada kita
          tentang menghayati, mencerna, dan berkesadaran secara total tentang
          nilai dasar tiap-tiap individu dan sekitarnya yang telah ada. Karena
          apa yang kita cemaskan pada masa kini, ketidakpastian akan masa depan,
          akan terjawab dengan kembali menelusuri makna masa lalu.
        </p>
      </section>
      <section className="bg-main-1 relative -top-48 pt-[22rem] pb-32">
        <div className="grid grid-cols-12 max-w-screen-xl mx-auto gap-6">
          <CardSpeaker />
          <CardSpeaker />
          <CardSpeaker />
        </div>
      </section>
    </div>
  );
};
export default Home;

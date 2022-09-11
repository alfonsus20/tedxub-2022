import { Icon } from "@iconify/react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import background from "../assets/images/home/background.png";
import Navbar from "../components/Navbar";

// const VideoPlayer = () => {
//   const containerRef = useRef(null);
//   const [containerHeight, setContainerHeight] = useState(20);

//   return (
//     <div
//       className="mt-12 relative overflow-hidden"
//       ref={containerRef}
//       style={{ height: `${containerHeight}vh` }}
//     >
//       <div className="w-[120%] absolute left-1/2 -translate-x-1/2 h-screen rounded-[50%] overflow-hidden">
//         <video className="w-[85%] mx-auto" controls>
//           <source src="https://api.tedxuniversitasbrawijaya.com/storage/TEDxUniversitasBrawijaya%202021%20_Manifestasi%20Peradaban_%20Opening%20Titles.mp4" />
//         </video>
//       </div>
//       <h1 className="text-center text-white text-3xl z-10 top-1/2 absolute left-1/2 -translate-x-1/2  -translate-y-1/2 ">
//         #MERAYAKAN <strong>KEMBALI</strong>
//       </h1>
//     </div>
//   );
// };

const Home = () => {
  const containerRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(20);
  const [containerOffset, setContainerOffset] = useState(0);
  const [borderRadius, setBorderRadius] = useState(50);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const offsetTop = containerRef.current?.offsetTop;
      setContainerOffset(offsetTop);

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
          style={{ height: `${containerHeight}vh`,borderRadius: `${borderRadius}% ${borderRadius}% 0 0`}}
        >
          <div
            className="w-[120%] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden flex justify-center items-center"
         >
            <video className="w-[85%] h-full mx-auto">
              <source src="https://api.tedxuniversitasbrawijaya.com/storage/TEDxUniversitasBrawijaya%202021%20_Manifestasi%20Peradaban_%20Opening%20Titles.mp4" />
            </video>
          </div>
          <h1 className="text-center text-white text-3xl z-10 top-1/2 absolute left-1/2 -translate-x-1/2  -translate-y-1/2 ">
            #MERAYAKAN <strong>KEMBALI</strong>
          </h1>
        </div>
      </section>
      <div className="h-[3000px] bg-green-700"></div>
    </div>
  );
};
export default Home;

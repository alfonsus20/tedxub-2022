import { Icon } from "@iconify/react";
import Navbar from "../components/Navbar";

import background from "../assets/images/home/background.png";
import background2 from "../assets/images/home/background-2.jpg";
import backgroundSpeaker from "../assets/images/home/background-speaker.png";

import leftHand from "../assets/images/home/left.png";
import rightHand from "../assets/images/home/right.png";
import banner from "../assets/images/home/banner.png";
import bgSectionTicket from "../assets/images/home/bg-section-ticket.jpg";
import CardSpeaker from "../components/CardSpeaker";
import CarouselTicketHome from "../components/CarouselTicketHome";
import VideoContainer from "../components/VideoContainer";

import { motion } from "framer-motion";
import { useRef } from "react";

const speakerContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const Home = () => {
  const refTheme = useRef(null);

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
              document
                .getElementById("video-container")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Icon icon="akar-icons:arrow-down" className="text-3xl" />
          </button>
        </div>
        <VideoContainer />
      </section>
      <section
        ref={refTheme}
        className="text-center bg-cover py-40 overflow-hidden rounded-b-[100%_50%] relative z-20"
        style={{ backgroundImage: `url("${background2}")` }}
      >
        <div className="flex flex-col items-center mb-8 relative">
          <motion.img
            src={leftHand}
            alt="left"
            className="absolute w-[40rem]"
            initial={{ rotate: -20, top: "-24rem", left: "-20rem", opacity: 0 }}
            whileInView={{
              rotate: 0,
              top: "-8rem",
              left: "-14rem",
              opacity: 1,
              transition: { stiffness: 0, duration: 1 },
            }}
          />
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { stiffness: 0, duration: 1 },
            }}
          >
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
          </motion.div>
          <motion.img
            src={rightHand}
            alt="left"
            className="absolute w-[40rem]"
            initial={{ rotate: -20, top: "-6rem", right: "-16rem", opacity: 0 }}
            whileInView={{
              rotate: 0,
              top: "-8rem",
              right: "-14rem",
              opacity: 1,
              transition: { stiffness: 0, duration: 1 },
            }}
          />
        </div>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { stiffness: 0, duration: 1 },
          }}
          className="max-w-[70%] mx-auto font-medium"
        >
          TEDxUniversitasBrawijaya 2022 kali ini akan membawa penonton melalui
          perjalanan istirahat dari kejenuhan dan kompleksitas yang telah
          terbentuk dengan kembali menjelajahi makna nilai kearifan lokal
          sebagai ruang untuk kembali pada akar, mengambil bekal dalam menjalani
          era modernitas saat ini. Penelusuran ini sebagai pengingat kepada kita
          tentang menghayati, mencerna, dan berkesadaran secara total tentang
          nilai dasar tiap-tiap individu dan sekitarnya yang telah ada. Karena
          apa yang kita cemaskan pada masa kini, ketidakpastian akan masa depan,
          akan terjawab dengan kembali menelusuri makna masa lalu.
        </motion.p>
      </section>
      <section
        className="bg-main-1 relative -mt-48 pt-[22rem] pb-32 bg-cover bg-fixed bg-no-repeat bg-center"
        style={{ backgroundImage: `url("${backgroundSpeaker}")` }}
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={speakerContainerVariants}
          className="grid grid-cols-12 max-w-screen-xl mx-auto gap-6"
        >
          <CardSpeaker />
          <CardSpeaker />
          <CardSpeaker />
        </motion.div>
      </section>
      <section
        className="bg-cover flex"
        style={{ backgroundImage: `url("${bgSectionTicket}")` }}
      >
        <div className="w-[40%] flex justify-center py-40">
          <div className="max-w-xs">
            <h3 className="text-white uppercase font-akira text-5xl mb-12">
              grab your tickets now!
            </h3>
            <button className="bg-main-3 font-bold px-8 py-3 text-white rounded-full">
              Buy Tickets
            </button>
          </div>
        </div>
        <div className="w-[60%] max-h-[40rem] flex items-center overflow-y-hidden">
          <CarouselTicketHome />
        </div>
      </section>
    </div>
  );
};
export default Home;

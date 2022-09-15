import { Icon } from "@iconify/react";
import Navbar from "../components/Navbar";

import background from "../assets/images/home/background.png";
import background2 from "../assets/images/home/background-2.jpg";
import backgroundSpeaker from "../assets/images/home/background-speaker.png";
import line from "../assets/images/home/line.png";

import leftHand from "../assets/images/home/left.png";
import rightHand from "../assets/images/home/right.png";
import banner from "../assets/images/home/banner.png";
import bgSectionTicket from "../assets/images/home/bg-section-ticket.jpg";
import eventTime from "../assets/images/home/event_time.png";
import CardSpeaker from "../components/CardSpeaker";
import CarouselTicketHome from "../components/CarouselTicketHome";
import VideoContainer from "../components/VideoContainer";
import speaker from "../assets/images/home/speaker.jpg";
import xAtas from "../assets/images/home/x_atas.png";
import xBawah from "../assets/images/home/x_bawah.png";

import { motion } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import ModalSpeaker from "../components/ModalSpeaker";
import { useState } from "react";

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
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  return (
    <div id="home" className="overflow-x-hidden">
      <section
        className="bg-[#353535] pt-6 min-h-screen relative overflow-y-hidden bg-cover bg-fixed bg-center flex flex-col"
        style={{ backgroundImage: `url("${background}")` }}
      >
        <Navbar />
        <div className="pt-8 px-14 mx-auto flex relative items-center justify-center w-full min-h-[70vh]">
          <img src={xAtas} alt="top" className="absolute top-[-8%] left-[5%] w-[15%]" />
          <img src={xBawah} alt="bottom" className="absolute bottom-[-20%] right-[10%] w-[18%] z-10" />
          <div className="text-center flex flex-col items-center">
            <div className="text-white font-akira mb-6 relative">
              <h1 className="font-sedgwick text-7xl text-main-3 opacity-75 absolute -translate-x-1/2 left-1/2 whitespace-nowrap -rotate-[2deg] -top-2">
                Merayakan Kembali
              </h1>
              <div className="z-10 relative">
                <h1 className="text-6xl">Merayakan Kembali</h1>
                <h2>Menggeledah arus, menilik ruang</h2>
              </div>
            </div>
            <img src={eventTime} alt="time" className="w-[23rem]" />
          </div>
          <button
            className="rounded-full p-4 border-2 border-white w-fit text-white absolute left-1/2 -translate-x-1/2 bottom-4"
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
        className="bg-main-1 relative -mt-48 pt-[22rem] pb-48 bg-cover bg-fixed bg-no-repeat bg-center z-10"
        style={{ backgroundImage: `url("${backgroundSpeaker}")` }}
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={speakerContainerVariants}
          className="grid grid-cols-12 max-w-screen-xl mx-auto gap-6"
        >
          {["Najwa Shihab", "Coki Pardede", "Jerome Polin"].map((data, idx) => (
            <CardSpeaker
              key={idx}
              onClick={() => setSelectedSpeaker({ nama: data, image: speaker })}
            />
          ))}
        </motion.div>
        <img
          src={line}
          className="absolute max-w-none w-[110%] h-[27%] bottom-[-10%] left-[-5%] rotate-1"
          alt="line"
        />
        <img
          src={line}
          className="absolute max-w-none w-[110%] h-[27%] bottom-[-10%] left-[-5%]"
          style={{ transform: "rotateY(180deg) rotate(1deg)" }}
          alt="line"
        />
      </section>
      <section
        className="bg-cover flex overflow-x-hidden relative items-center"
        style={{ backgroundImage: `url("${bgSectionTicket}")` }}
      >
        <div className="w-[40%] flex justify-center py-20">
          <div className="max-w-xs">
            <h3 className="text-white uppercase font-akira text-5xl mb-12">
              grab your tickets now!
            </h3>
            <Link to="/ticket">
              <button className="bg-main-3 font-bold px-8 py-3 text-white rounded-full">
                Buy Ticket
              </button>
            </Link>
          </div>
        </div>
        <div className="w-[60%] max-h-[44rem] flex items-center overflow-y-hidden">
          <CarouselTicketHome />
        </div>
      </section>
      <ModalSpeaker
        isOpen={!!selectedSpeaker}
        data={selectedSpeaker}
        onClose={() => setSelectedSpeaker(null)}
      />
    </div>
  );
};

export default Home;

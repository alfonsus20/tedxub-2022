import { Icon } from "@iconify/react";

import background from "../assets/images/home/background.png";
import backgroundSpeaker from "../assets/images/home/background-speaker.png";
import merangkaiTitle from "../assets/images/home/merangkai.jpg";
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
import wave from '../assets/images/home/wave.png'

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ModalSpeaker from "../components/ModalSpeaker";
import { useState } from "react";
import { useEffect } from "react";

import "../style/home.scss";
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
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const xBawahRef = useRef(null);
  const xAtasRef = useRef(null);
  const [xBawahPosition, setXBawahPosition] = useState(0);
  const [xAtasPosition, setXAtasPosition] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    const offsetTopXBawah = xBawahRef.current?.offsetTop;
    const percentageXBawah = (scrollPosition / offsetTopXBawah) * 100;
    setXBawahPosition(percentageXBawah);

    const offsetTopXAtas = xAtasRef.current?.offsetTop;
    const percentageXAtas = (scrollPosition / offsetTopXAtas) * 100;
    setXAtasPosition(percentageXAtas);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="home" className="overflow-x-hidden">
      <section
        className="bg-[#353535] pt-[calc(10vh+1.5rem)] min-h-screen relative overflow-hidden bg-cover bg-fixed bg-center flex flex-col"
        style={{ backgroundImage: `url("${background}")` }}
      >
        <div className="py-20 px-14 mx-auto flex relative items-center justify-center w-full min-h-[70vh]">
          <img
            src={xAtas}
            ref={xAtasRef}
            style={{transform : `translateX(${xAtasPosition}%)`}}
            alt="top"
            className="absolute top-[-8%] left-0 sm:left-12 w-40 xs:w-48 z-10"
          />
          <img
            ref={xBawahRef}
            style={{transform : `translateX(${xBawahPosition}%)`}}
            src={xBawah}
            alt="bottom"
            className="absolute bottom-[-20%] right-0 sm:right-16 w-48 xs:w-56 z-10"
          />
          <img src={wave} alt='wave-bawah' className="absolute -left-40 -bottom-40 w-56 sm:w-64 md:w-72 rotate-[-40deg]" />
          <img src={wave} alt='wave-atas' className="absolute -right-40 -top-40 w-56 sm:w-64 md:w-72 rotate-[130deg]" />
          <div className="text-center flex flex-col items-center">
            <div className="text-white font-akira mb-6 relative">
              <div className="z-10 relative overflow-y-hidden">
                <motion.h1
                  initial={{ y: -100 }}
                  animate={{
                    y: 0,
                    transition: { stiffness: 0, duration: 1 },
                  }}
                  className="text-4xl xs:text-5xl sm:text-6xl"
                >
                  Merayakan Kembali
                </motion.h1>
                <div className="overflow-y-hidden">
                  <motion.h2
                    initial={{ y: -100 }}
                    animate={{
                      y: 0,
                      transition: { stiffness: 0, duration: 1, delay: 1 },
                    }}
                    className='font-sedgwick text-xl xs:text-2xl md:text-3xl'
                  >
                    Menggeledah arus, menilik ruang
                  </motion.h2>
                </div>
              </div>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.75, transition: { duration: 1, delay: 3 } }}
                className="font-sedgwick text-5xl xs:text-7xl sm:text-8xl text-main-3 absolute -translate-x-1/2 left-1/2 lg:whitespace-nowrap -rotate-[2deg] top-0 xs:-top-2 sm:-top-4"
              >
                Merayakan Kembali
              </motion.h1>
            </div>
            <div className="overflow-y-hidden">
              <motion.img
                initial={{ y: -100 }}
                animate={{
                  y: 0,
                  transition: { stiffness: 0, duration: 1, delay: 2 },
                }}
                src={eventTime}
                alt="time"
                className="w-64 xs:w-[23rem] relative z-10"
              />
            </div>
          </div>
          <motion.button
            className="rounded-full p-3 border-2 border-white w-fit text-white absolute left-1/2 -translate-x-1/2 bottom-4 z-10"
            onClick={() => {
              document
                .getElementById("video-container")
                .scrollIntoView({ behavior: "smooth" });
            }}
            initial={{ bottom: "2.5rem" }}
            animate={{
              bottom: "1rem",
              transition: { yoyo: Infinity, duration: 0.7 },
            }}
          >
            <Icon icon="akar-icons:arrow-down" className="text-3xl" />
          </motion.button>
        </div>
        <VideoContainer />
      </section>
      <section className="text-center flex justify-center items-center flex-col">
        <div
          id="theme"
          className="rounded-b-[50%] bg-[#E8E8E8] w-[200%] md:w-[150%] pt-40 pb-36 flex items-center justify-center relative z-20"
        >
          <div className="w-[50%] md:w-[67%]">
            <div className="flex flex-col items-center mb-8 relative">
              <motion.img
                src={leftHand}
                alt="left"
                className="absolute w-[70%] xs:w-[60%] sm:w-[30rem] lg:w-[40rem]"
                initial={{
                  rotate: -20,
                  top: "-8rem",
                  left: "-16rem",
                  opacity: 0,
                }}
                whileInView={{
                  rotate: 0,
                  top: "-6rem",
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
                <div className="text-6xl xs:text-7xl sm:text-8xl font-sedgwick relative">
                  <img
                    src={merangkaiTitle}
                    className="absolute rounded-full w-24 xs:w-28 sm:w-32 lg:w-36 aspect-square -top-6 sm:-top-5 lg:-top-8 left-8 xs:left-2 sm:-left-4 lg:-left-6 object-cover"
                    alt=""
                  />
                  <h2 className="text-main-3 relative z-10">
                    <span className="text-white">Me</span>rayakan
                  </h2>
                  <h3 className="mt-6">kembali</h3>
                </div>
                <div
                  className="px-12 py-10 bg-[length:110%_125%] bg-top bg-no-repeat"
                  style={{ backgroundImage: `url("${banner}")` }}
                >
                  <p className="text-lg sm:text-xl font-semibold text-white">
                    Menggeledah Arus, Menilik Ruang
                  </p>
                </div>
              </motion.div>
              <motion.img
                src={rightHand}
                alt="left"
                className="absolute w-[70%] xs:w-[60%] sm:w-[30rem] lg:w-[40rem]"
                initial={{
                  rotate: -20,
                  top: "-6rem",
                  right: "-16rem",
                  opacity: 0,
                }}
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
              className="w-[80%] xs:max-w-screen-lg mx-auto font-medium"
            >
              TEDxUniversitasBrawijaya 2022 kali ini akan membawa penonton
              melalui perjalanan istirahat dari kejenuhan dan kompleksitas yang
              telah terbentuk dengan kembali menjelajahi makna nilai kearifan
              lokal sebagai ruang untuk kembali pada akar, mengambil bekal dalam
              menjalani era modernitas saat ini. Penelusuran ini sebagai
              pengingat kepada kita tentang menghayati, mencerna, dan
              berkesadaran secara total tentang nilai dasar tiap-tiap individu
              dan sekitarnya yang telah ada. Karena apa yang kita cemaskan pada
              masa kini, ketidakpastian akan masa depan, akan terjawab dengan
              kembali menelusuri makna masa lalu.
            </motion.p>
          </div>
        </div>
      </section>
      <section
        className="bg-main-1 relative -mt-48 pt-[22rem] pb-20 md:pb-48 bg-contain xs:bg-cover bg-center z-10 px-4"
        style={{ backgroundImage: `url("${backgroundSpeaker}")` }}
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={speakerContainerVariants}
          className="grid grid-cols-12 max-w-screen-xl mx-auto gap-y-[4rem] sm:gap-x-6 mb-12"
        >
          {["Najwa Shihab", "Coki Pardede", "Jerome Polin"].map((data, idx) => (
            <CardSpeaker
              key={idx}
              index={idx}
              onClick={() => setSelectedSpeaker({ nama: data, image: speaker })}
            />
          ))}
        </motion.div>
        <img
          src={line}
          className="absolute max-w-none w-[110%] h-[12%] md:h-[27%] bottom-[-5%] md:bottom-[-10%] left-[-5%] rotate-1"
          alt="line"
        />
        <img
          src={line}
          className="absolute max-w-none w-[110%] h-[12%] md:h-[27%] bottom-[-5%] md:bottom-[-10%] left-[-5%]"
          style={{ transform: "rotateY(180deg) rotate(1deg)" }}
          alt="line"
        />
        <p className="text-white text-center text-4xl md:text-5xl font-bold">
          Speakers
        </p>
      </section>
      <section
        className="bg-cover flex flex-col-reverse md:flex-row overflow-x-hidden relative items-center pt-24 md:pt-0"
        style={{ backgroundImage: `url("${bgSectionTicket}")` }}
      >
        <div className="w-full md:w-[40%] flex justify-center pt-20 pb-20 md:py-20 px-4">
          <div className="md:max-w-xs text-center md:text-left">
            <h3 className="text-white uppercase font-akira text-4xl md:text-5xl mb-6 md:mb-12">
              grab your tickets now!
            </h3>
            <Link to="/ticket">
              <button className="bg-main-3 font-bold px-8 py-3 text-white rounded-full">
                Buy Ticket
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-[60%] md:max-h-[44rem] flex items-center overflow-y-hidden scale-[2] md:scale-[1]">
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

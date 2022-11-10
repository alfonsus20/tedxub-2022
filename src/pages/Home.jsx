import { Icon } from "@iconify/react";

import background from "../assets/images/home/background.png";
import backgroundSpeaker from "../assets/images/home/background-speaker.png";
import line from "../assets/images/home/line.png";
import bgSectionTicket from "../assets/images/home/bg-section-ticket.jpg";
import eventTime from "../assets/images/home/event_time_new.png";
import CardSpeaker from "../components/CardSpeaker";
import CarouselTicketHome from "../components/CarouselTicketHome";
import VideoContainer from "../components/VideoContainer";
import xAtas from "../assets/images/home/x_atas.png";
import xBawah from "../assets/images/home/x_bawah.png";
import wave from "../assets/images/home/wave.png";

import hand from "../assets/images/home/hand.png";
import coret from "../assets/images/home/coret.svg";
import coretX from "../assets/images/home/coret-x.svg";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ModalSpeaker from "../components/ModalSpeaker";
import { useState } from "react";
import { useEffect } from "react";

import "../style/home.scss";
import { useRef } from "react";

import speakerDiah from "../assets/images/speakers/speaker-diah.jpg";
import speakerEko from "../assets/images/speakers/speaker-eko.jpg";
import speakerFluxcup from "../assets/images/speakers/speaker-fluxcup.jpg";
import speakerIndriana from "../assets/images/speakers/speaker-indri.jpg";
import speakerTsany from "../assets/images/speakers/speaker-tsany.jpg";
import speakerKandi from "../assets/images/speakers/speaker-kandi.jpg";

const speakerContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const speakerData = [
  {
    name: "Kandi Windoe",
    title: "Indonesia Multikultural Unggul di Era Global",
    desc: (
      <>
        <p>
          Hari ini ada karena masa lalu. Era global kini penuh dengan tuntutan
          untuk bersaing secara kompetitif. Melalui kapasitas bangsa Indonesia
          untuk berkarya dan menciptakan gagasan yang mengakar pada nilai-nilai
          serta kebudayaan Indonesia, akhirnya mampu membawa manfaat bagi dunia.
        </p>
        <p>
          Pada Talks kali ini, Kandi Windoe sebagai praktisi city branding akan
          mengajak penonton memahami seni dari mencermati sebagai salah satu
          nilai kearifan lokal melalui pengalaman proses kreatif dilalui dari
          persepektif seorang praktisi city branding.
        </p>
      </>
    ),
    image: speakerKandi,
  },
  {
    name: "Diah Priharsari",
    title: "Secercah Rukun dalam Riuhnya Digitalisasi",
    desc: (
      <>
        <p>
          Mengambil porsi yang cukup besar, netizen bergerak menjadi bagian yang
          tidak terpisahkan dari masifnya digitalisasi. Layaknya seorang hakim
          ulung, jemari netizen lebih dari mampu untuk menentukan nasib
          seseorang. Riuhnya kompleksitas hubungan antar manusia digital
          sejatinya dapat kembali diredam dengan memaknai konsep rukun yang
          sederhana.
        </p>
        <p>
          Pada talks kali ini, Ibu Diah akan menceritakan tentang makna harmoni
          sosial kala bersinggungan dengan digitalisasi yang hadir saat ini.
        </p>
      </>
    ),
    image: speakerDiah,
  },
  {
    name: "Tsany Abyandary",
    title: "Sebuah Seni Mengayuh Keberanian",
    desc: (
      <>
        <p>
          Pernahkah kamu merasa bahwa sekadar makan saja selalu ingin ditemani
          orang lain. Pernahkah kamu juga merasa ingin ke suatu tempat tapi
          takut karena tidak ada orang yang dikenalnya. Padahal tidak semuanya
          harus dilakukan bersama orang lain dan tidak semuanya harus pasti.
          Kadang kita tidak perlu menunggu orang lain dan kepastian untuk
          melakukan sesuatu. Kita tidak harus menggunakan rute yang sudah banyak
          digunakan orang lain, kita bebas untuk pergi kemanapun yang kita
          inginkan. Cukup berani dan lihat akan banyak hal baru yang ditemukan.
        </p>
        <p>
          Pada talk kali ini Aby akan mencoba menyampaikan ide tentang
          keberanian mengeksplor hal baru yang didapat dari pengalaman
          bersepeda.
        </p>
      </>
    ),
    image: speakerTsany,
  },
  {
    name: "Indriana Listia Rahmawati",
    title: "Memaknai Dunia Melalui Lampu Lalu Lintas",
    desc: (
      <>
        <p>
          Terkadang standar sosial yang ada memaksa manusia untuk selalu
          menggapai hal tanpa mengetahui pasti nilai dibaliknya. Manusia dan
          jiwa nya sebagai kesatuan dengan simbiosis mutualisme. Sejatinya,
          manusia harus lebih cemas akan ruang di dalam jiwa daripada menangkap
          hal-hal semu.
        </p>
        <p>
          Pada talks kali ini, Indriana Listia akan mengajak kita untuk
          berkoneksi dengan diri sebagai upaya berkesadaran total sebagai
          individu untuk menjalani aktivitas keseharian.
        </p>
      </>
    ),
    image: speakerIndriana,
  },
  {
    name: "Eko Widianto",
    title: "Antara Persepsi dan Justifikasi",
    desc: (
      <>
        <p>
          Di tengah era modernitas, masyarakat seringkali memandang sesuatu yang
          buruk di depan mata sudah pasti buruk di dalamnya, begitupun
          sebaliknya. Namun, bagaimana proses dalam memaknai sisi lain yang
          belum diketahui kevaliditasannya mengenai apa yang ada dalam intuisi?.
        </p>
        <p>
          Pada talks kali ini, Eko Widianto akan mengeksplorasi tentang
          bagaimana kita dapat melihat perbedaan antara dua kutub bukan sebagai
          hal yang berlawanan, melainkan hal yang dapat dipersatukan melalui
          kacamata seorang jurnalis.
        </p>
      </>
    ),
    image: speakerEko,
  },
  {
    name: "Fluxcup",
    title: "Semangkuk Kelucuan Untuk Menjadi Waras",
    desc: (
      <>
        <p>
          Makna keberdayaan indra yang diambil dari nilai kebijaksanaan lokal
          mendorong kami untuk menawarkan perspektif segar dalam melihat koneksi
          individu untuk menjadi terhubung dengan diri sendiri. Pada talks kali
          ini, Fluxcup akan bercerita mengenai pengalamannya sebagai visual
          artist dalam memaknai karya sebagai kebebasan berekspresi natural
          untuk menghasilkan karya yang akan dieksplorasi menjadi simbolisasi
          ekspresi sebagai manusia.
        </p>
        <p>
          Pada talks kali ini, Fluxcup akan bercerita mengenai pengalamannya
          sebagai visual artist dalam memaknai karya sebagai kebebasan
          berekspresi natural untuk menghasilkan karya yang akan dieksplorasi
          menjadi simbolisasi ekspresi sebagai manusia.
        </p>
      </>
    ),
    image: speakerFluxcup,
  },
];

const Home = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const xBawahRef = useRef(null);
  const xAtasRef = useRef(null);
  const waveBawahRef = useRef(null);
  const waveAtasRef = useRef(null);

  const [ornamentPosition, setOrnamentPosition] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    const offsetTop = document.getElementById("video-container").offsetTop;
    const percentage = (scrollPosition / offsetTop) * 100;

    setOrnamentPosition(percentage);
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
            style={{ transform: `translateX(-${ornamentPosition}%)` }}
            alt="top"
            className="absolute top-[-8%] left-0 sm:left-12 w-40 xs:w-48 z-10"
          />
          <img
            ref={xBawahRef}
            style={{ transform: `translateX(${ornamentPosition}%)` }}
            src={xBawah}
            alt="bottom"
            className="absolute bottom-[-20%] right-0 sm:right-16 w-48 xs:w-56 z-10"
          />
          <img
            ref={waveBawahRef}
            style={{
              transform: `translateX(-${ornamentPosition}%) rotate(-40deg)`,
            }}
            src={wave}
            alt="wave-bawah"
            className="absolute -left-40 -bottom-40 w-56 sm:w-64 md:w-72"
          />
          <img
            ref={waveAtasRef}
            style={{
              transform: `translateX(${ornamentPosition}%) rotate(130deg)`,
            }}
            src={wave}
            alt="wave-atas"
            className="absolute -right-40 -top-40 w-56 sm:w-64 md:w-72"
          />
          <div className="text-center flex flex-col items-center">
            <div className="text-white font-akira mb-6 relative">
              <div className="z-10 relative overflow-y-hidden">
                <motion.h1
                  initial={{ y: -100 }}
                  animate={{
                    y: 0,
                    transition: { stiffness: 0, duration: 1 },
                  }}
                  className="text-4xl xs:text-5xl sm:text-6xl 3xl:text-7xl"
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
                    className="font-sedgwick text-xl xs:text-2xl md:text-3xl 3xl:text-4xl"
                  >
                    Menggeledah arus, menilik ruang
                  </motion.h2>
                </div>
              </div>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 0.75,
                  transition: { duration: 1, delay: 3 },
                }}
                className="font-sedgwick text-5xl xs:text-7xl sm:text-8xl 3xl:text-9xl text-main-3 absolute -translate-x-1/2 left-1/2 lg:whitespace-nowrap -rotate-[2deg] top-0 xs:-top-2 sm:-top-4 3xl:-top-6"
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
                className="w-72 xs:w-[18rem] 3xl:w-[20rem] relative z-10"
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
          className="rounded-b-[50%] bg-[#E8E8E8] w-[200%] md:w-[150%] pt-28 pb-40 flex items-center justify-center relative z-20 overflow-hidden"
        >
          <div className="w-[50%] md:w-[67%] relative">
            <img
              src={coret}
              alt="coret"
              className="absolute left-4 -bottom-24 w-32 xl:w-40 hidden md:block"
            />
            <img
              src={hand}
              alt="left-hand"
              className="absolute -left-32 -top-52 w-80 xl:w-[25rem] hidden md:block"
              style={{ transform: "rotateY(180deg) rotateZ(-60deg)" }}
            />
            <img
              src={hand}
              alt="right-hand"
              className="absolute -right-32 -bottom-60 xl:-bottom-72 w-[20rem] xl:w-[28rem] -rotate-[20deg] hidden md:block -z-10"
            />
            <img
              src={coretX}
              alt="coretX"
              className="absolute right-0 -top-28 w-[18rem] xl:w-[23rem] hidden md:block"
            />
            <div className="flex flex-col items-center mb-8 relative">
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: { stiffness: 0, duration: 1 },
                }}
              >
                <div className="text-6xl xs:text-7xl sm:text-8xl font-sedgwick relative">
                  <h2 className="text-main-3 relative z-10">Merayakan</h2>
                  <h3 className="mt-6">kembali</h3>
                </div>
                <div className="px-12 pt-8 bg-[length:110%_125%] bg-top bg-no-repeat">
                  <p className="text-xl sm:text-2xl font-semibold">
                    Menggeledah Arus, Menilik Ruang
                  </p>
                </div>
              </motion.div>
            </div>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { stiffness: 0, duration: 1 },
              }}
              className="w-[80%] xs:max-w-screen-md mx-auto font-medium"
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
        className="bg-main-1 relative -mt-48 pt-[20rem] pb-20 md:pb-48 bg-contain xs:bg-cover bg-center z-10 px-4"
        style={{ backgroundImage: `url("${backgroundSpeaker}")` }}
      >
        {/* <motion.div
          initial="hidden"
          whileInView="show"
          variants={speakerContainerVariants}
          className="grid grid-cols-12 max-w-screen-xl mx-auto gap-y-[4rem] gap-x-4 mb-12"
        >
          {speakerData.map((data, idx) => (
            <CardSpeaker
              key={idx}
              index={idx}
              onClick={() => setSelectedSpeaker(data)}
              {...data}
            />
          ))}
        </motion.div> */}
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
          COMING SOON
        </p>
      </section>
      <section
        className="bg-cover flex flex-col-reverse md:flex-row overflow-x-hidden relative items-center pt-24 md:pt-0"
        style={{ backgroundImage: `url("${bgSectionTicket}")` }}
      >
        <div className="absolute h-full w-full items-center max-w-screen-2xl left-1/2 -translate-x-1/2 px-4 md:px-12 hidden md:flex">
          <div className="w-full md:w-[40%] flex pt-20 pb-20 md:py-20">
            <div className="text-center md:text-left">
              <h3 className="text-white uppercase font-akira text-4xl md:text-5xl mb-6 md:mb-12">
                grab
                <br /> your
                <br /> tickets
                <br /> now!
              </h3>
              <Link to="/ticket">
                <button className="bg-main-3 font-bold px-8 py-3 text-white rounded-full transition-colors duration-200 hover:text-main-3 hover:bg-white">
                  Buy Ticket
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[40%] flex justify-center pt-20 pb-20 md:py-20 px-4">
          <div className="md:max-w-xs text-center md:text-left md:hidden">
            <h3 className="text-white uppercase font-akira text-4xl md:text-5xl mb-6 md:mb-12">
              grab your tickets now!
            </h3>
            <Link to="/ticket">
              <button className="bg-main-3 font-bold px-8 py-3 text-white rounded-full transition-colors duration-200 hover:text-main-3 hover:bg-white">
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

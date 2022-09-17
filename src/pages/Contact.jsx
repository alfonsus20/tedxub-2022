import background from "../assets/images/about/background.jpg";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import contactPhone from "../assets/images/contact-phone.svg";

const Contact = () => {
  return (
    <div className="min-h-screen w-full bg-cover bg-no-repeat bg-[#353535]" style={{ backgroundImage: `url("${background}")` }}>
      <img src={contactPhone} className="hidden lg:block absolute top-1/2 left-20 w-56 z-0" alt="Phone" />
      <img src={contactPhone} className="hidden lg:block absolute top-48 right-32 w-32 rotate-12 z-0" alt="Phone" />
      <div className="container m-auto z-10">
        <div className="heading text-center mb-5 relative m-auto">
          <h1 className="font-sedgwick text-8xl text-main-3 opacity-75 h-24">Contact</h1>
          <h1 className="font-akira text-white text-4xl absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">Contact</h1>
        </div>
        
        <div className="flex flex-row flex-wrap justify-center items-center gap-10">
          <motion.div
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{ repeat: Infinity, duration: 3 }}
            className={`z-10 bg-gradient-to-r from-sec-1 via-sec-4 to-sec-3 bg-[length:300%_300%] p-2 w-80 rounded-xl`}
          >
            <div className="bg-white p-2 text-main-1 rounded-lg text-center flex flex-col gap-2">
              <p className="font-akira text-main-3">EVENT</p>
              <p className="font-sedgwick">Jogo</p>
              <p className="font-jakarta">081357620230</p>
            </div>
          </motion.div>

          <motion.div
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{ repeat: Infinity, duration: 3 }}
            className={`z-10 bg-gradient-to-r from-sec-4 via-sec-2 to-sec-1 bg-[length:300%_300%] p-2 w-80 rounded-xl`}
          >
            <div className="bg-white p-2 text-main-1 rounded-lg text-center flex flex-col gap-2">
              <p className="font-akira text-main-3">PARTNERSHIP</p>
              <p className="font-sedgwick">Davina Aliya</p>
              <p className="font-jakarta">08111683318</p>
            </div>
          </motion.div>

          <motion.div
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{ repeat: Infinity, duration: 3 }}
            className={`z-10 bg-gradient-to-r from-sec-2 via-sec-1 to-sec-4 bg-[length:300%_300%] p-2 w-80 rounded-xl`}
          >
            <div className="bg-white p-2 text-main-1 rounded-lg text-center flex flex-col gap-2">
              <p className="font-akira text-main-3">SPONSORSHIP</p>
              <p className="font-sedgwick">Alvin</p>
              <p className="font-jakarta">081358284470</p>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-row flex-wrap justify-center items-center gap-5 mt-14">
          <a className="px-5 py-2 rounded-full bg-main-3 text-main-2 flex flex-row w-fit items-center justify-center gap-1 hover:bg-main-2 hover:text-main-3 duration-200" target="_blank" href="https://instagram.com/tedxuniversitasbrawijaya">
            <Icon icon="akar-icons:instagram-fill" className="text-lg" />
            <p className="font-jakarta">tedxuniversitasbrawijaya</p>
          </a>
          <a className="px-5 py-2 rounded-full bg-main-3 text-main-2 flex flex-row w-fit items-center justify-center gap-1 hover:bg-main-2 hover:text-main-3 duration-200" target="_blank" href="https://twitter.com/TEDxBrawijaya">
            <Icon icon="akar-icons:twitter-fill" className="text-lg" />
            <p className="font-jakarta">TEDxBrawijaya</p>
          </a>
          <a className="px-5 py-2 rounded-full bg-main-3 text-main-2 flex flex-row w-fit items-center justify-center gap-1 hover:bg-main-2 hover:text-main-3 duration-200" href="mailto:tedxbrawijaya@gmail.com">
            <Icon icon="akar-icons:envelope" className="text-lg" />
            <p className="font-jakarta">tedxbrawijaya@gmail.com</p>
          </a>
        </div>
      </div>
    </div>
  );
}
 
export default Contact;
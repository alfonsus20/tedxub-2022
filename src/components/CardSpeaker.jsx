import { motion } from "framer-motion";

import photoBG from "../assets/images/home/photo-bg.png";
import speaker1 from "../assets/images/home/speaker-1.png";

const variant = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const CardSpeaker = () => {
  return (
    <motion.div
      variants={variant}
      className="bg-white col-span-4 max-w-xs mx-auto rounded-xl relative group"
    >
      <div className="h-56 w-5 bg-white absolute -top-56 left-1/2 -translate-x-1/2 z-10"></div>
      <div className="h-5 w-12 absolute -top-5 left-1/2 -translate-x-1/2 bg-white rounded-t-full"></div>
      <div className="relative overflow-hidden cursor-pointer">
        <img
          src={speaker1}
          alt="speaker"
          className="w-full relative z-10 group-hover:scale-110 transition-transform duration-500"
        />
        <img
          src={photoBG}
          alt="photo-bg"
          className="absolute w-[80%] top-8 left-1/2 -translate-x-1/2"
        />
        <div className="absolute transition-all duration-500 -bottom-full group-hover:bottom-0 w-full text-center bg-main-3 py-6 z-20 font-semibold text-white text-lg rounded-b-xl">
          Kandi Windoe
        </div>
      </div>
    </motion.div>
  );
};
export default CardSpeaker;

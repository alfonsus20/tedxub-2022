import { motion } from "framer-motion";

import photoBG from "../assets/images/home/photo-bg.png";
import speaker1 from "../assets/images/home/speaker-1.png";

import cn from "classnames";

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

const CardSpeaker = ({ onClick, index }) => {
  return (
    <motion.div
      variants={variant}
      className={cn("col-span-6 sm:col-span-4 max-w-xs mx-auto relative group px-6 sm:px-0", {
        "col-start-4 col-end-10": index === 2,
      })}
    >
      <div
        className={cn(
          "w-5 bg-white absolute md:-top-56 left-1/2 md:h-56 -translate-x-1/2 z-10",
          { "h-[600px] -top-[600px]": index === 2, "h-56 -top-56": index !== 2 }
        )}
      ></div>
      <div className="h-5 w-12 absolute -top-5 left-1/2 -translate-x-1/2 bg-white rounded-t-full"></div>
      <div
        className="relative overflow-hidden cursor-pointer rounded-xl bg-white"
        onClick={onClick}
      >
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

import { motion } from "framer-motion";
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

const CardSpeaker = ({ onClick, name, image }) => {
  return (
    <motion.div
      variants={variant}
      className={cn(
        "col-span-6 sm:col-span-4 max-w-xs mx-auto relative group w-full p-1 bg-main-3 rounded-xl overflow-hidden cursor-pointer"
      )}
      onClick={onClick}
    >
      <img
        src={image}
        alt="speaker"
        className="w-full relative z-10 group-hover:scale-110 transition-all duration-500 rounded-xl grayscale group-hover:grayscale-0"
      />
      <div className="absolute transition-all left-0 right-0 duration-500 -bottom-full group-hover:bottom-0 text-center bg-main-3 py-3 sm:py-6 z-20 font-semibold text-white sm:text-lg">
        {name}
      </div>
    </motion.div>
  );
};
export default CardSpeaker;

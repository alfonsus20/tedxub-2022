import { createPortal } from "react-dom";
import cn from "classnames";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

const ModalSpeaker = ({ onClose, isOpen = true, data = {} }) => {
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={cn(
            "z-[999] flex items-center justify-center fixed top-0 bottom-0 left-0 right-0 shadow-lg"
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="absolute bg-black bg-opacity-50 w-full h-full"
            onClick={onClose && onClose}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          ></motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="z-30 w-full min-h-[12rem] max-h-[95%] sm:max-h-[80%] overflow-y-auto sm:p-6 relative transition-modal ease-out transform duration-500 mx-8 modal max-w-md sm:max-w-4xl"
          >
            <div className="bg-white flex flex-col sm:flex-row font-jakarta relative pt-6 pb-8 sm:py-0 rounded-2xl sm:rounded-[3rem]">
              <Icon
                icon="ep:circle-close"
                className="absolute top-4 text-4xl right-6 cursor-pointer"
                onClick={onClose}
              />
              <div className="w-full sm:w-[40%] overflow-hidden items-center justify-center flex mb-2 sm:mb-0 sm:rounded-l-[3rem] rounded-none">
                <div className="hidden sm:flex w-[150%] h-[120%] overflow-hidden rounded-r-[50%] items-center justify-center">
                  <img
                    src={data.image}
                    alt="speaker"
                    className="w-full h-[84%] object-cover object-center"
                  />
                </div>
                <img
                  src={data.image}
                  alt="speaker"
                  className="w-72 aspect-square max-w-[85%] object-cover object-center rounded-full sm:hidden"
                />
              </div>
              <div className="w-full sm:w-[60%] px-6 sm:pl-10 sm:pr-16 sm:py-12 flex flex-col justify-center">
                <h3 className="font-bold text-2xl sm:text-3xl text-center sm:text-left">{data.name}</h3>
                <h4 className="mb-2 text-lg text-center sm:text-left">{data.title}</h4>
                <div className="text-justify text-sm space-y-2">
                  {data.desc}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById("modal-speaker")
  );
};

export default ModalSpeaker;

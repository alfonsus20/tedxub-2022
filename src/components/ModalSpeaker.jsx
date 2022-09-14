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
            className="z-30 w-full min-h-[12rem] rounded-md max-h-[90%] sm:max-h-[80%] overflow-y-auto p-2 sm:p-6 relative transition-modal ease-out transform duration-500 mx-8 modal max-w-5xl"
          >
            <div className="bg-white flex rounded-[3rem] font-jakarta relative">
              <Icon
                icon="ep:circle-close"
                className="absolute top-4 text-4xl right-6 cursor-pointer"
                onClick={onClose}
              />
              <div className="w-[40%]">
                <img
                  src={data.image}
                  alt="speaker"
                  className="w-full h-full object-cover rounded-l-[3rem] rounded-r-[50%_90%]"
                />
              </div>
              <div className="w-[60%] pl-10 pr-16 py-12">
                <h3 className="font-bold text-3xl mb">{data.nama}</h3>
                <h4 className="mb-2 text-lg">Seni Dalam City Branding</h4>
                <p className="text-justify text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                  scelerisque porta turpis non blandit. Dui non, sed semper eu
                  nisi rhoncus. Sed pulvinar scelerisque integer in eget rutrum
                  faucibus at. Duis potenti id curabitur sollicitudin lacus
                  faucibus. Quisque cras habitant aliquam vivamus faucibus eget.
                  At at nunc aliquet ultrices pellentesque suspendisse egestas
                  risus. Eget convallis amet, leo, proin condimentum mauris.
                  Dolor in nullam orci, faucibus interdum sit sagittis nunc
                  felis. Luctus lectus amet magna eleifend turpis. Cursus sapien
                  ut tortor, pretium tellus eget. Lectus amet non sollicitudin
                  ultricies. Pharetra tempor, ut donec lectus. Diam turpis
                  nullam vel nisl et aliquam et. Imperdiet venenatis dolor est
                  ac vel quam. Risus sem quis ac sed velit viverra ipsum vitae.
                  Amet facilisi lectus aenean et felis,
                </p>
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

import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";

const Alert = ({ alertStatus, isOpenAlert, onCloseAlert }) => {
  
  return (
    <AnimatePresence>
      { isOpenAlert && (
        <motion.div 
          className={`z-30 flex justify-center items-center fixed w-full h-fit bottom-0 transition-modal ease-in-out transform pb-10`}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{
            default: { duration: .5 }
          }}
        >
          <div className={`w-96 flex flex-col rounded-xl bg-main-2 overflow-hidden font-jakarta shadow-lg absolute bottom-full left-1/2 -translate-x-1/2`}>
            <div className="bg-main-3 flex flex-row p-5 justify-between items-center text-white font-jakartaBold">
              <div className="flex flex-row gap-2 items-center">
                <Icon
                  icon="akar-icons:triangle-alert-fill"
                  className="text-lg"
                />
                Perhatian
              </div>
              <button onClick={onCloseAlert}>
                <Icon
                  icon="akar-icons:cross"
                  className="text-lg"
                />
              </button>
            </div>
            <div className="p-5">
              <p>{alertStatus}</p>
            </div>
          </div>
        </motion.div>
        )
      }
    </AnimatePresence>
  );
}
 
export default Alert;
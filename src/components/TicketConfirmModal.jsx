import { createPortal } from "react-dom";
import cn from "classnames";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const TicketConfirmModal = ({ onClose, isOpen }) => {

  let navigate = useNavigate();

  const handleRedirect = () => {
    return window.location.replace('https://dev.xen.to/sp-vjoXD');
  }

  return createPortal(
    <AnimatePresence>
    {isOpen && (
      <motion.div
        className={cn(
          "z-30 flex items-center justify-center fixed top-0 bottom-0 left-0 right-0 shadow-lg px-10"
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          className="absolute bg-black bg-opacity-50 w-full h-full"
          onClick={onClose}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`z-50 relative bg-main-1 rounded-3xl border-main-2 border-2 w-128 h-80 ${isOpen ? "visible opacity-100" : "invisible opacity-0"}`}
        >
          <div className="flex flex-col justify-around items-center h-full p-10 text-main-2 text-center">
            <div className="flex flex-col justify-center items-center gap-5">
              <h1 className="font-akira text-2xl">ARE YOU SURE?</h1>
            </div>
            <p className="font-jakarta text-sm text-left">By clicking ‘Yes, I’m Sure’, it means that you are sure that the data you have entered is correct</p>
            <div className="flex flex-row gap-5">
              <button onClick={onClose} className="bg-main-2 text-main-1 hover:bg-gray-500 hover:text-main-2 duration-200 drop-shadow-lg px-10 py-2 font-jakartaBold rounded-full">Back</button>
              <button onClick={handleRedirect} className="bg-main-3 hover:bg-main-2 hover:text-main-3 duration-200 drop-shadow-lg px-10 py-2 font-jakartaBold rounded-full">Yes, I'm Sure</button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>,
  document.getElementById("ticket-confirm-modal-container")
  );
};
export default TicketConfirmModal;
